import { Insight } from "@/src/domain/insights/Insight";
import { Observation } from "@/src/domain/observation/Observation";

interface GenerateInsightParams {
  observations: Observation[];
}

export function generateInsight({
  observations,
}: GenerateInsightParams): Insight {
  const now = new Date();

  const title =
    observations.length > 0
      ? observations[0].title
      : "Nuevo Insight";

  const description = observations
    .map((observation) => observation.description)
    .join(" ");

  return {
    id: crypto.randomUUID(),

    createdAt: now,
    updatedAt: now,

    title,

    description,

    observations: observations.map((o) => o.id),

    confidence:
      observations.length > 0
        ? Math.min(observations.length * 20, 100)
        : 0,
  };
}