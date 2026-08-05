import type { Observation } from "@/src/domain/observation/Observation";
import type { Pattern } from "@/src/domain/patterns/Pattern";
import type { Evidence } from "@/src/domain/evidence";

interface GeneratePatternsParams {
  observations: Observation[];
}

export function generatePatterns({
  observations,
}: GeneratePatternsParams): Pattern[] {
  const now = new Date();

  return [
    {
      id: crypto.randomUUID(),

      title: "Patrón inicial",

      description:
        "Primer patrón detectado a partir de las observaciones disponibles.",

      // El nuevo dominio trabaja con Evidence.
      // De momento la migración mantiene esta colección vacía.
      evidences: [] as Evidence[],

      insight:
        "Patrón generado durante la migración al nuevo dominio.",

      relevance: 0.5,

      confidence: 0.5,

      tags: [],

      conflicts: [],

      opportunities: [],

      createdAt: now,

      updatedAt: now,
    },
  ];
}