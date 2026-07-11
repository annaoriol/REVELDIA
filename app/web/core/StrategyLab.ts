import { ObservationContext } from "@/types/ObservationContext";
import { LabResult } from "@/types/LabResult";

export function analyzeStrategy(
  context: ObservationContext
): LabResult {

  return {

    laboratory: "Estrategia",

    confidence: context.hasAnswer ? 0.79 : 0,

    patterns: context.hasAnswer
      ? [
          "Posicionamiento diferencial",
          "Valor percibido"
        ]
      : [],

    contradictions: [],

    recommendations: [
      "Reforzar la propuesta de valor."
    ]

  };

}