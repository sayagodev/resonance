"use client";

import {
  BookOpen,
  Smile,
  Mic,
  Languages,
  Clapperboard,
  Gamepad2,
  Podcast,
  Brain,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import type { LucideIcon } from "lucide-react";

const PROMPT_SUGGESTIONS: {
  label: string;
  prompt: string;
  icon: LucideIcon;
}[] = [
    {
      label: "Narrar una historia",
      prompt:
        "En un pueblo escondido entre montañas cubiertas de niebla, vivía un viejo relojero cuyos relojes nunca daban la hora correcta, pero siempre decían la verdad. Una tarde lluviosa, un extraño entró y pidió un reloj que pudiera mostrarle su futuro.",
      icon: BookOpen,
    },
    {
      label: "Contar un chiste",
      prompt:
        "¿Por qué los científicos no confían en los átomos? ¡Porque lo componen todo! Además, una vez le pregunté a un átomo si estaba seguro de algo y me dijo que había perdido un electrón. Le pregunté: '¿Estás seguro?', y me respondió: '¡Estoy positivo!'.",
      icon: Smile,
    },
    {
      label: "Grabar un anuncio",
      prompt:
        "Presentamos BrightBean Coffee: el tueste más suave que jamás hayas probado. Cultivado en granjas de gran altitud, tostado lentamente a la perfección y entregado fresco en tu puerta cada semana. Despierta con algo extraordinario. Prueba BrightBean hoy mismo y llévate tu primera bolsa gratis.",
      icon: Mic,
    },
    {
      label: "Hablar en diferentes idiomas",
      prompt:
        "¡Hola y bienvenidos! Hoy vamos a hacer un viaje por todo el mundo. Bonjour, comment allez-vous? Hola, bienvenidos a todos. Guten Tag, willkommen bei uns. Ciao a tutti, benvenuti. Celebremos juntos la belleza del lenguaje.",
      icon: Languages,
    },
    {
      label: "Dirigir una escena dramática",
      prompt:
        "La lluvia golpeaba contra la ventana mientras ella se giraba para enfrentarlo. 'Lo sabías, ¿verdad?', susurró ella, con la voz apenas contenida. Él dio un paso adelante, con la mandíbula tensa. 'Hice lo que tenía que hacer'. El silencio entre ellos era más fuerte que la tormenta exterior.",
      icon: Clapperboard,
    },
    {
      label: "Personaje de videojuego",
      prompt:
        "Escucha con atención, aventurero. El reino de Ashenvale se está desmoronando y el Cristal de la Eternidad se ha fragmentado en siete pedazos. Eres el único que puede recomponerlo. Reúne valor, afila tu espada y encuéntrame en las Puertas del Alba. El tiempo no está de nuestra parte.",
      icon: Gamepad2,
    },
    {
      label: "Presentar un podcast",
      prompt:
        "Hola a todos, bienvenidos a un nuevo episodio de 'La Mente Curiosa', el podcast donde profundizamos en las historias, la ciencia y las ideas extrañas que dan forma a nuestro mundo. Soy tu anfitrión, y hoy tenemos a un invitado increíble que va a desafiar todo lo que creías saber.",
      icon: Podcast,
    },
    {
      label: "Guiar una meditación",
      prompt:
        "Cierra los ojos y respira profundamente. Mantén el aire suavemente... y suéltalo. Siente cómo el peso del día se desvanece poco a poco. Con cada respiración, te sumerges más en la calma. No hay ningún otro lugar en el que debas estar. Solo aquí. Solo ahora. Inhala paz, exhala tensión.",
      icon: Brain,
    },
  ];

export function PromptSuggestions({
  onSelect,
}: {
  onSelect: (prompt: string) => void;
}) {
  return (
    <div className="space-y-2.5">
      <p className="text-sm text-muted-foreground">Comienza con</p>
      <div className="flex flex-wrap gap-2">
        {PROMPT_SUGGESTIONS.map((suggestion) => (
          <Badge
            key={suggestion.label}
            variant="outline"
            className="cursor-pointer gap-1.5 py-1 px-2.5 text-xs hover:bg-accent rounded-md"
            onClick={() => onSelect(suggestion.prompt)}
          >
            <suggestion.icon className="size-3.5 shrink-0" />
            {suggestion.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}
