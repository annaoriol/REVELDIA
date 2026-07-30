import { Insight } from "../insights/Insight";
import { Observation } from "../observation/Observation";

export class InsightEngine {
  createInsight(
    title: string,
    description: string,
    observations: Observation[],
  ): Insight {
    return {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      title,
      description,
      observations: observations.map(o => o.id),
      confidence: 1,
    };
  }
}