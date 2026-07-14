import { ObservationContext } from "@/types/ObservationContext";
import { LabResult } from "@/types/LabResult";

export const StrategySpecialist = {

  id: "strategy",

  name: "Especialista en Estrategia",

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

    if (context.words.includes("objetivo")) {
      patterns.push("Orientación a objetivos");
    }

    if (context.words.includes("plan")) {
      patterns.push("Pensamiento estratégico");
    }

    if (context.words.includes("marca")) {
      patterns.push("Visión de posicionamiento");
    }

    if (patterns.length === 0 && context.hasAnswer) {
      patterns.push("Estrategia en construcción");
    }

    return {

      laboratory: "strategy",

      confidence,

      patterns,

      contradictions: [],

      recommendations: [

        "Define primero el objetivo antes de tomar decisiones.",

      ],

    };

  },

};