import { Observation } from "@/src/domain/observation/Observation";
import { Pattern } from "@/src/domain/patterns/Pattern";

interface GeneratePatternsParams {
  observations: Observation[];
}

export function generatePatterns({
  observations,
}: GeneratePatternsParams): Pattern[] {
  if (observations.length === 0) {
    return [];
  }

  const now = new Date();

  return [
    {
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
      title: "Patrón inicial",
      description: "Primer patrón detectado.",
      observationIds: observations.map(o => o.id),
      confidence: 0.5,
    },
  ];
}