import { ObservationContext } from "@/types/ObservationContext";
import { LabResult } from "@/types/LabResult";

export function analyzeVisual(
  context: ObservationContext
): LabResult {

  return {

    laboratory: "Visual",

    confidence: context.hasAnswer ? 0.91 : 0,

    patterns: context.hasAnswer
      ? [
          "Minimalismo",
          "Luz natural",
          "Espacios abiertos"
        ]
      : [],

    contradictions: [],

    recommendations: [
      "Reducir ruido visual."
    ]

  };

}