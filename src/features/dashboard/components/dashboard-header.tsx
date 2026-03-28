'use client';

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Headphones, ThumbsUp } from "lucide-react";

export function DashboardHeader() {
  const { isLoaded, user } = useUser();

  return (
    <div className="flex items-start justify-between">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">
          Me alegro de verte
        </p>
        <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
          {isLoaded ? (user?.fullName ?? user?.firstName ?? "por aquí") : "..."}
        </h1>
      </div>

      <div className="lg:flex items-center gap-3 hidden">
        <Button variant={"outline"} size={"sm"} asChild>
          <Link href="mailto:contacto@sayago.dev">
            <ThumbsUp />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>
        <Button variant={"outline"} size={"sm"} asChild>
          <Link href="mailto:contacto@sayago.dev">
            <Headphones />
            <span className="hidden lg:block">¿Necesitas ayuda?</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
