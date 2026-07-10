import { Observation } from "@/types/observation";
import { LabResult } from "@/types/LabResult";

export function analyzeVisual(
  observations: Observation[]
): LabResult {

  const last =
    observations.at(-1);

  return {

    laboratory: "Visual",

    confidence: 0.91,

    patterns: last?.answer
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