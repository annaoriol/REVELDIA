import { Observation } from "@/types/observation";
import { LabResult } from "@/types/LabResult";

export function analyzeNarrative(
  observations: Observation[]
): LabResult {

  const last =
    observations.at(-1);

  return {

    laboratory: "Narrativa",

    confidence: 0.74,

    patterns: last?.answer
      ? [
          "Lenguaje emocional",
          "Comunicación reflexiva"
        ]
      : [],

    contradictions: [],

    recommendations: [
      "Mantener una voz coherente."
    ]

  };

}