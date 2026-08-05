import type { CreativeDNA } from "@/src/domain/creative-dna/CreativeDNA";
import type { Revelation } from "@/src/domain/revelation/Revelation";
import type { Synthesis } from "@/src/domain/synthesis/Synthesis";

interface GenerateRevelationParams {
  projectId: string;
  creativeDNA: CreativeDNA;
  synthesis: Synthesis;
}

export function generateRevelation({
  projectId,
  creativeDNA,
  synthesis,
}: GenerateRevelationParams): Revelation {
  const now = new Date();

  return {
    id: crypto.randomUUID(),

    projectId,

    creativeDNA,

    title: "RƎVELACIÓN",

    summary: synthesis.summary,

    description: synthesis.summary,

    coreIdea: "",

    valueProposition: "",

    differentiation: "",

    communicationStrategy: "",

    creativeDirection: [],

    recommendations: [],

    nextActions: [],

    confidence: 1,

    createdAt: now,

    updatedAt: now,
  };
}