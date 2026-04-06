import type { VoiceCategory } from "@/generated/prisma/client";

export const VOICE_CATEGORY_LABELS: Record<VoiceCategory, string> = {
  AUDIOBOOK: "Audiolibro",
  CONVERSATIONAL: "Conversacional",
  CUSTOMER_SERVICE: "Atención al cliente",
  GENERAL: "General",
  NARRATIVE: "Narrativa",
  CHARACTERS: "Personajes",
  MEDITATION: "Meditación",
  MOTIVATIONAL: "Motivacional",
  PODCAST: "Podcast",
  ADVERTISING: "Publicidad",
  VOICEOVER: "Locución",
  CORPORATE: "Corporativo",
};

export const VOICE_CATEGORIES = Object.keys(
  VOICE_CATEGORY_LABELS,
) as VoiceCategory[];
