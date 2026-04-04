'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";
import { COST_PER_UNIT, TEXT_MAX_LEGTH } from "@/features/text-to-speech/data/constants";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function TextInputPanel() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleGenerate = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    router.push(`/text-to-speech?text=${encodeURIComponent(trimmed)}`)
  }

  return (
    <div className="rounded-[22px] bg-linear-185 from-[#ff8ee3] from-15% via-[#57d7e0] via-39% to-[#dbf1f2] to-85% p-0.5 shadow-[0_0_0_4px_white]">
      {/* Using px values for border-radius to ensure proper gradient border math */}
      <div className="rounded-[20px] bg-[#f9f9f9] p-1">
        <div className="space-y-4 rounded-2xl bg-white p-4 dro-shadow-xs">
          <Textarea
            name="text-to-speech"
            placeholder="Empieza a escribir o pega tu texto aquí..."
            className="min-h-35 resize-none border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={TEXT_MAX_LEGTH}
          />

          {/* Bottom info */}

          <div className="flex items-center justify-between">
            <Badge variant={"outline"} className="gap-1.5 border-dashed">
              <Coins className="size-3 text-chart-5" />
              <span className="text-xs">
                {text.length === 0 ? (
                  "Empieza a escribir para estimar"
                ) : (
                  <>
                    <span className="tabular-nums">
                      ${(text.length * COST_PER_UNIT).toFixed(4)}
                    </span>{" "}
                    estimado
                  </>
                )}
              </span>
            </Badge>
            <span className="text-xs text-muted-foreground">
              {text.length.toLocaleString()} / {TEXT_MAX_LEGTH.toLocaleString()} caracteres
            </span>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-end p-3">
          <Button
            size={"sm"}
            disabled={!text.trim()}
            onClick={handleGenerate}
            className="w-full lg:w-auto"
          >
            Generar voz
          </Button>
        </div>
      </div>
    </div>
  )
}
