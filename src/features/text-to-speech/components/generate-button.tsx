"use client";

import {Button} from "@/components/ui/button";
import {Spinner} from "@/components/ui/spinner";

export function GenerateButton({
  size,
  disabled,
  isSumitting,
  onSubmit,
  className,
}: {
  size?: "default" | "sm";
  disabled: boolean;
  isSumitting: boolean;
  onSubmit: () => void;
  className?: string;
}) {
  return (
    <Button
    size={size}
    className={className}
    onClick={onSubmit}
    disabled={disabled}
    >
    {isSumitting ? (
      <>
      <Spinner className="size-3" />
      Generando...
      </>
    ): (
      "Generar Audio"
    )}
    </Button>
  )
}
