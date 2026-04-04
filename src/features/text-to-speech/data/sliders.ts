interface Slider {
  id: "temperature" | "topP" | "topK" | "repetitionPenalty";
  label: string;
  leftLabel: string;
  rightLabel: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

export const sliders: Slider[] = [
  {
    id: "temperature",
    label: "Creatividad",
    leftLabel: "Consistente",
    rightLabel: "Expresivo",
    min: 0,
    max: 2,
    step: 0.1,
    defaultValue: 0.8,
  },
  {
    id: "topP",
    label: "Variedad de Voz",
    leftLabel: "Estable",
    rightLabel: "Dinámico",
    min: 0,
    max: 1,
    step: 0.05,
    defaultValue: 0.95,
  },
  {
    id: "topK",
    label: "Rango de Expresión",
    leftLabel: "Sutil",
    rightLabel: "Dramático",
    min: 1,
    max: 10000,
    step: 100,
    defaultValue: 1000,
  },
  {
    id: "repetitionPenalty",
    label: "Flujo Natural",
    leftLabel: "Rítmico",
    rightLabel: "Variado",
    min: 1,
    max: 2,
    step: 0.1,
    defaultValue: 1.2,
  },
];
