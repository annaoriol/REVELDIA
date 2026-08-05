import type { Insight } from "@/src/domain/insights/Insight";
import type { Pattern } from "@/src/domain/patterns/Pattern";

interface GenerateInsightParams {
  patterns: Pattern[];
}

export function generateInsight({
  patterns,
}: GenerateInsightParams): Insight {
  const now = new Date();

  return {
    id: crypto.randomUUID(),

    createdAt: now,
    updatedAt: now,

    title:
      patterns[0]?.title ??
      "Generated Insight",

    description: patterns
      .map((pattern) => pattern.description)
      .join("\n\n"),

    observations: patterns.flatMap((pattern) =>
      pattern.evidences.map(
        (evidence) => evidence.id
      )
    ),

    confidence:
      patterns.length === 0
        ? 0
        : Math.min(patterns.length * 20, 100),
  };
}