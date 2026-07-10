import { Observation } from "@/types/observation";
import { LabResult } from "@/types/LabResult";

export function analyzeIdentity(
  observations: Observation[]
): LabResult {

  const last =
    observations.at(-1);

  return {

    laboratory: "Identidad",

    confidence: 0.86,

    patterns: last?.answer
      ? [
          "Autenticidad",
          "Coherencia",
          "Búsqueda de identidad"
        ]
      : [],

    contradictions: [],

    recommendations: [
      "Profundizar en el origen de la marca."
    ]

  };

}