import { Project } from "@/types/project";
import { CouncilResult } from "@/types/CouncilResult";
import { Laboratory } from "@/types/observation";

const LABORATORIES: Laboratory[] = [
  "identity",
  "visual",
  "narrative",
  "strategy",
  "communication",
];

export function buildCouncil(
  project: Project
): CouncilResult {
  const observations =
    project.dossier.observations;

  return {
    results: LABORATORIES.map((laboratory) => {
      const current =
        observations.filter(
          (observation) =>
            observation.laboratory ===
            laboratory
        );

      const confidence =
        current.length === 0
          ? 0
          : Math.min(
              1,
              current.reduce(
                (sum, observation) =>
                  sum + observation.confidence,
                0
              ) / current.length
            );

      const patterns = Array.from(
        new Set(
          current.flatMap(
            (observation) =>
              observation.keywords
          )
        )
      ).slice(0, 8);

      const contradictions: string[] = [];

      const recommendations =
        generateRecommendations(
          laboratory,
          patterns,
          confidence
        );

      return {
        laboratory,
        confidence,
        patterns,
        contradictions,
        recommendations,
      };
    }),
  };
}

function generateRecommendations(
  laboratory: Laboratory,
  patterns: string[],
  confidence: number
): string[] {
  if (patterns.length === 0) {
    return [
      "Todavía no existe información suficiente para extraer conclusiones.",
    ];
  }

  if (confidence < 0.5) {
    return [
      "Continúa realizando observaciones para aumentar la claridad del laboratorio.",
    ];
  }

  switch (laboratory) {
    case "identity":
      return [
        "Define con mayor precisión la personalidad de la marca.",
      ];

    case "visual":
      return [
        "Consolida un lenguaje visual coherente.",
      ];

    case "narrative":
      return [
        "Potencia los patrones narrativos que más se repiten.",
      ];

    case "strategy":
      return [
        "Prioriza las ideas con mayor diferenciación.",
      ];

    case "communication":
      return [
        "Simplifica el mensaje principal antes de ampliarlo.",
      ];

    default:
      return [];
  }
}