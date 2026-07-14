import { ObservationContext } from "@/types/ObservationContext";
import { LabResult } from "@/types/LabResult";

export const NarrativeSpecialist = {

  id: "narrative",

  name: "Especialista en Narrativa",

  analyze(
    context: ObservationContext
  ): LabResult {

    const confidence =
      !context.hasAnswer
        ? 0
        : Math.min(
            0.95,
            0.40 + context.length * 0.03
          );

    const patterns: string[] = [];

    if (context.words.includes("historia")) {
      patterns.push("Pensamiento narrativo");
    }

    if (context.words.includes("emoc")) {
      patterns.push("Comunicación emocional");
    }

    if (patterns.length === 0 && context.hasAnswer) {
      patterns.push("Narrativa en construcción");
    }

    return {

      laboratory: "narrative",

      confidence,

      patterns,

      contradictions: [],

      recommendations: [

        "Profundiza en la historia antes de comunicar.",

      ],

    };

  },

};