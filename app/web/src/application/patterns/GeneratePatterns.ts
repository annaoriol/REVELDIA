import type { Evidence } from "@/src/domain/evidence";
import type { Observation } from "@/src/domain/observation/Observation";
import type { Pattern } from "@/src/domain/patterns/Pattern";

interface GeneratePatternsParams {
  observations: Observation[];
}

/**
 * Genera los primeros patrones a partir de las observaciones.
 *
 * En esta primera versión el algoritmo es deliberadamente simple.
 * Más adelante será sustituido por PatternEngine.
 */
export function generatePatterns({
  observations,
}: GeneratePatternsParams): Pattern[] {
  const now = new Date();

  const evidences: Evidence[] = [];

  return [
    {
      id: crypto.randomUUID(),

      title: "Patrón inicial",

      description:
        "Primer patrón detectado durante el análisis.",

      theme: "General",

      evidences,

      signals: observations.map(
        (observation) => observation.answer
      ),

      keywords: observations.flatMap(
        (observation) => observation.keywords
      ),

      insight:
        "Las observaciones muestran una dirección creativa común.",

      hypothesis:
        "Existe una coherencia suficiente para construir un patrón inicial.",

      relevance: 0.5,

      weight: 0.5,

      confidence: 0.5,

      emerging: true,

      tags: [],

      conflicts: [],

      opportunities: [],

      nextQuestions: [],

      createdAt: now,

      updatedAt: now,
    },
  ];
}