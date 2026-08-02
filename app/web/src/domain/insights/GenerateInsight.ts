import { Insight } from "@/src/domain/insights/Insight";
import { Pattern } from "@/src/domain/patterns/Pattern";

interface GenerateInsightParams {
  patterns: Pattern[];
}

export function generateInsight({
  patterns,
}: GenerateInsightParams): Insight {
  const now = new Date();

  const title =
    patterns.length > 0
      ? patterns[0].title
      : "Nuevo Insight";

  const description = patterns
    .map((pattern) => pattern.description)
    .join(" ");

  return {
    id: crypto.randomUUID(),

    createdAt: now,
    updatedAt: now,

    title,

    description,

    observations: patterns.flatMap(
      (pattern) => pattern.observationIds
    ),

    confidence:
      patterns.length > 0
        ? Math.min(patterns.length * 20, 100)
        : 0,
  };
}