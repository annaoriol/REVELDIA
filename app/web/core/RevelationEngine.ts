import { CouncilResult } from "@/types/CouncilResult";
import { Revelation } from "@/types/revelation";
import { Laboratory } from "@/types/observation";

function getClarity(
  council: CouncilResult,
  laboratory: Laboratory
): number {

  const result = council.results.find(
    (lab) => lab.laboratory === laboratory
  );

  return Math.round((result?.confidence ?? 0) * 100);

}

export function generateRevelation(
  council: CouncilResult
): Revelation {

  const strongest =
    [...council.results].sort(
      (a, b) => b.confidence - a.confidence
    )[0];

  const confidence = Math.round(

    council.results.reduce(

      (total, lab) => total + lab.confidence,

      0

    ) /

      council.results.length *

      100

  );

  const patterns =
    council.results
      .flatMap((lab) => lab.patterns)
      .slice(0, 6);

  const recommendations =
    council.results
      .flatMap((lab) => lab.recommendations)
      .slice(0, 3);

  const summary =
    patterns.length > 0

      ? `Empieza a consolidarse un lenguaje creativo dominado por el laboratorio ${strongest.laboratory}.`

      : "Todavía no existe suficiente información para realizar una revelación consistente.";

  return {

    id: crypto.randomUUID(),

    title: "Revelación",

    text: summary,

    summary,

    confidence,

    clarity: {

      identity: getClarity(council, "identity"),

      narrative: getClarity(council, "narrative"),

      visual: getClarity(council, "visual"),

      strategy: getClarity(council, "strategy"),

    },

    patterns,

    recommendations,

    references: [],

    laboratories:
      council.results.map(
        (lab) => lab.laboratory
      ),

    createdAt:
      new Date().toISOString(),

    council:
      council.results.map(
        (lab) => ({

          specialist: lab.laboratory,

          confidence: lab.confidence,

          summary:
            lab.patterns.length > 0
              ? lab.patterns.join(", ")
              : "Sin patrones suficientes",

        })
      ),

  };

}