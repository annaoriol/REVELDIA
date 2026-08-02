import { Revelation } from "@/src/domain/revelation/Revelation";
import { Synthesis } from "@/src/domain/synthesis/Synthesis";

interface Params {
  synthesis: Synthesis;
}

export function generateRevelation({
  synthesis,
}: Params): Revelation {
  const now = new Date();

  return {
    id: crypto.randomUUID(),

    createdAt: now,

    updatedAt: now,

    title: "RƎVELACIÓN",

    description: synthesis.summary,

    value: "",

    differentiation: "",

    communication: "",

    confidence: synthesis.confidence,
  };
}