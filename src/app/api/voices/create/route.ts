import z from "zod";
import { parseBuffer } from "music-metadata";
import { auth } from "@clerk/nextjs/server";

import { VOICE_CATEGORIES } from "@/features/voices/data/voice-categories";
import { prisma } from "@/lib/db";
import { uploadAudio } from "@/lib/r2";

import type { VoiceCategory } from "@/generated/prisma/client";

const createVoiceSchema = z.object({
  name: z.string().min(1, "Nombre de voz es requerido"),
  category: z.enum(VOICE_CATEGORIES as [VoiceCategory, ...VoiceCategory[]]),
  language: z.string().min(1, "El idioma es requerido"),
  description: z.string().nullish(),
})

const MAX_UPLOAD_SIZE_BYTES = 20 * 1024 * 1024  // 20 MB
const MIN_AUDIO_DURATION_SECONDS = 10;

export async function POST(request: Request) {
  const { userId, orgId } = await auth();

  if (!userId || !orgId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const url = new URL(request.url)

  const validation = createVoiceSchema.safeParse({
    name: url.searchParams.get("name"),
    category: url.searchParams.get("category"),
    language: url.searchParams.get("language"),
    description: url.searchParams.get("description"),
  })

  if (!validation.success) {
    return Response.json(
      {
        error: "Invalid input",
        issues: validation.error.issues,
      },
      { status: 400 },
    )
  }

  const { name, category, language, description } = validation.data;
  const fileBuffer = await request.arrayBuffer()

  if (!fileBuffer.byteLength) {
    return Response.json(
      { error: "Por favor carga un archivo de audio" },
      { status: 400 },
    )
  }

  if (fileBuffer.byteLength > MAX_UPLOAD_SIZE_BYTES) {
    return Response.json(
      { error: "El archivo de audio excede el límite de 20 MB" },
      { status: 413 },
    )
  }

  const contentType = request.headers.get("content-type")

  if (!contentType) {
    return Response.json(
      { error: 'Falta el encabezado "Content-Type"' },
      { status: 400 },
    )
  }

  const normalizedContentType =
    contentType.split(";")[0]?.trim() || "audio/wav"

  // validate audio format and duration
  let duration: number;
  try {
    const metadata = await parseBuffer(
      new Uint8Array(fileBuffer),
      { mimeType: normalizedContentType },
      { duration: true },
    )
    duration = metadata.format.duration ?? 0;
  } catch {
    return Response.json(
      { error: "El archivo no es un archivo de audio válido" },
      { status: 422 },
    )
  }

  if (duration < MIN_AUDIO_DURATION_SECONDS) {
    return Response.json(
      {
        error: `Audio muy corto (${duration.toFixed(1)}s). La duración mínima es ${MIN_AUDIO_DURATION_SECONDS} segundos.`
      },
      { status: 422 },
    )
  }

  let createdVoiceId: string | null = null;

  try {
    const voice = await prisma.voice.create({
      data: {
        name,
        variant: "CUSTOM",
        orgId,
        description,
        category,
        language,
      },
      select: {
        id: true,
      }
    })

    createdVoiceId = voice.id
    const r2ObjectKey = `voices/orgs/${orgId}/${voice.id}`

    await uploadAudio({
      buffer: Buffer.from(fileBuffer),
      key: r2ObjectKey,
      contentType: normalizedContentType,
    })

    await prisma.voice.update({
      where: {
        id: voice.id,
      },
      data: {
        r2ObjectKey,
      }
    })

  } catch {
    if (createdVoiceId) {
      await prisma.voice.delete({
        where: { id: createdVoiceId },
      }).catch(() => { })
    }

    return Response.json(
      { error: "Error al crear la voz. Por favor reintente." },
      { status: 500 },
    )
  }

  return Response.json(
    { name, message: "Voz creada exitosamente." },
    { status: 201 },
  )
}
