import { Synthesis } from "@/src/domain/synthesis/Synthesis";

interface Params {
  conclusions: string[];
}

export function generateSynthesis({
  conclusions,
}: Params): Synthesis {
  const now = new Date();

  return {
    id: crypto.randomUUID(),

    createdAt: now,

    updatedAt: now,

    summary: conclusions.join(" "),

    conclusions,

    confidence: 0.8,
  };
}