import type { Evidence } from "@/app/features/evidence/types/Evidence";

export const mockEvidence: Evidence[] = [
  {
    id: "1",
    origin: "REVELA",
    type: "brand",
    title: "Apple",
    summary: "Minimalismo, claridad y dirección visual.",
    whyRelevant:
      "RƎVELA considera que es un referente internacional en simplicidad y coherencia.",
    source: "apple.com",
    confidence: 98,
    tags: ["minimalismo", "branding", "producto"],
    selected: false,
  },

  {
    id: "2",
    origin: "REVELA",
    type: "brand",
    title: "Braun",
    summary: "Diseño funcional inspirado por Dieter Rams.",
    whyRelevant:
      "Excelente referencia para sistemas de diseño duraderos.",
    source: "braun.com",
    confidence: 96,
    tags: ["industrial", "producto", "dieter rams"],
    selected: false,
  },

  {
    id: "3",
    origin: "USER",
    type: "image",
    title: "Moodboard Pinterest",
    summary: "Colección de referencias visuales del proyecto.",
    whyRelevant:
      "Representa el gusto visual y la dirección buscada.",
    confidence: 100,
    tags: ["moodboard", "usuario"],
    selected: true,
  },
];