import { Insight } from "@/src/domain/insights/Insight";
import { CreativeDirection } from "@/src/domain/creative-direction/CreativeDirection";

interface Params {
  insights: Insight[];
}

export function generateCreativeDirection({
  insights,
}: Params): CreativeDirection {
  const now = new Date();

  return {
    id: crypto.randomUUID(),

    createdAt: now,

    updatedAt: now,

    title:
      insights[0]?.title ??
      "Dirección Creativa",

    summary: insights
      .map(i => i.description)
      .join(" "),

    objectives: insights.map(
      i => i.title
    ),

    tone: "editorial",

    specialists: [],
  };
}