'use client';

import { useStore } from "@tanstack/react-form";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DrawerTrigger } from "@/components/ui/drawer";
import { VoiceAvatar } from "@/components/voice-avatar/voice-avatar";
import { useTypedAppFormContext } from "@/hooks/use-app-form";

import { useTTSVoices } from "../contexts/tts-voices-context";
import { ttsFormOptions } from "./text-to-speech-form";


export function VoiceSelectorButton() {
  const { allVoices } = useTTSVoices()

  const form = useTypedAppFormContext(ttsFormOptions);
  const voiceId = useStore(form.store, (s) => s.values.voiceId);

  const currentVoice = allVoices.find((v) => v.id === voiceId) ?? allVoices[0];
  const buttonLabel = currentVoice?.name ?? "Selecciona una voz";

  return (
    <DrawerTrigger asChild>
      <Button
        variant={"outline"}
        size={"sm"}
        className="flex-1 justify-start gap-2 px-2"
      >
        {currentVoice && (
          <VoiceAvatar
            seed={currentVoice.id}
            name={currentVoice.name}
            className="size-5"
          />
        )}
        <div className="flex gap-2">
          <span className="flex-1 truncate text-left text-sm font-medium">
            {buttonLabel}
          </span>

          <span className="text-[10px] font-semibold border border-black px-1 rounded-full">
            <span className="translate-y-px inline-block">{currentVoice.language}</span>
          </span>
        </div>
        <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
      </Button>
    </DrawerTrigger>
  )
}
