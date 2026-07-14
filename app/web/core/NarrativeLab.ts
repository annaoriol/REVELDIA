import { ObservationContext } from "@/types/ObservationContext";
import { LabResult } from "@/types/LabResult";

export function analyzeNarrative(
  context: ObservationContext
): LabResult {

  return {

    laboratory: "narrative",

    confidence: context.hasAnswer ? 0.74 : 0,

    patterns: context.hasAnswer
      ? [
          "Lenguaje emocional",
          "Comunicación reflexiva",
        ]
      : [],

    contradictions: [],

    recommendations: [

      "Mantener una voz coherente.",

    ],

  };

}