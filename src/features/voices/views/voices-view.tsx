"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { VoicesList } from "../components/voices-list";
import { useQueryState } from "nuqs";
import { voicesSearchParams } from "../lib/params";
import { VoicesToolbar } from "../components/voices-toolbar";

function VoicesContent() {
  const trpc = useTRPC()
  const [query] = useQueryState("query", voicesSearchParams.query);
  const { data } = useSuspenseQuery(
    trpc.voices.getAll.queryOptions({ query })
  )

  return (
    <>
      <VoicesList title="Voces del equipo" voices={data.custom} />
      <VoicesList title="Voces del sistema" voices={data.system} />
    </>
  )
}

export function VoicesView() {
  return (
    <div className="flex-1 space-y-10 overflow-y-auto p-3 lg:p-6">
      <VoicesToolbar />
      <VoicesContent />
    </div>
  )
}
