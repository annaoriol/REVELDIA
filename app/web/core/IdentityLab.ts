import { ObservationContext } from "@/types/ObservationContext";
import { LabResult } from "@/types/LabResult";

export function analyzeIdentity(
  context: ObservationContext
): LabResult {

  const confidence =
    !context.hasAnswer
      ? 0
      : Math.min(
          0.95,
          0.45 + context.length * 0.03
        );

  const patterns: string[] = [];

  if (context.words.includes("yo")) {
    patterns.push("Autoconocimiento");
  }

  if (context.words.includes("marca")) {
    patterns.push("Identidad de marca");
  }

  if (context.words.includes("persona")) {
    patterns.push("Identidad personal");
  }

  if (context.words.includes("valor")) {
    patterns.push("Búsqueda de propósito");
  }

  if (patterns.length === 0 && context.hasAnswer) {
    patterns.push("Identidad en exploración");
  }

  return {

    laboratory: "Identidad",

    confidence,

    patterns,

    contradictions: [],

    recommendations: [

      "Continúa observando antes de consolidar una conclusión.",

    ],

  };

}