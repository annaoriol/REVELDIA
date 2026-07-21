import { ObservationContext } from "@/legacy/types/ObservationContext";
import { LabResult } from "@/types/LabResult";

export const VisualSpecialist = {

  id: "visual",

  name: "Especialista Visual",

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

    if (context.words.includes("color")) {
      patterns.push("Sensibilidad cromática");
    }

    if (context.words.includes("imagen")) {
      patterns.push("Pensamiento visual");
    }

    if (context.words.includes("luz")) {
      patterns.push("Observación de la luz");
    }

    if (patterns.length === 0 && context.hasAnswer) {
      patterns.push("Lenguaje visual en exploración");
    }

    return {

      laboratory: "visual",

      confidence,

      patterns,

      contradictions: [],

      recommendations: [

        "Observa antes de interpretar la imagen.",

      ],

    };

  },

};
