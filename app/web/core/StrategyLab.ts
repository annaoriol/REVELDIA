import { Observation } from "@/types/observation";
import { LabResult } from "@/types/LabResult";

export function analyzeStrategy(
  observations: Observation[]
): LabResult {

  const last =
    observations.at(-1);

  return {

    laboratory: "Estrategia",

    confidence: 0.79,

    patterns: last?.answer
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