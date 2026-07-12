import { ObservationContext } from "@/types/ObservationContext";
import { LabResult } from "@/types/LabResult";

export function analyzeNarrative(
  context: ObservationContext
): LabResult {

  const confidence =
    !context.hasAnswer
      ? 0
      : Math.min(
          0.95,
          0.40 + context.length * 0.035
        );

  const patterns: string[] = [];

  if (context.words.includes("historia")) {
    patterns.push("Pensamiento narrativo");
  }

  if (context.words.includes("emoción")) {
    patterns.push("Lenguaje emocional");
  }

  if (context.words.includes("mensaje")) {
    patterns.push("Comunicación con intención");
  }

  if (context.words.includes("persona")) {
    patterns.push("Narrativa centrada en las personas");
  }

  if (context.words.includes("marca")) {
    patterns.push("Storytelling de marca");
  }

  if (patterns.length === 0 && context.hasAnswer) {
    patterns.push("Narrativa en construcción");
  }

  return {

    laboratory: "Narrativa",

    confidence,

    patterns,

    contradictions: [],

    recommendations: [

      "Profundiza en la historia antes de definir el mensaje.",

    ],

  };

}