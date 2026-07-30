import { Observation } from "../observation/Observation";
import { Reference } from "../references/Reference";

export class ObservationEngine {
  createObservation(
    title: string,
    description: string,
    references: Reference[],
  ): Observation {
    return {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      title,
      description,
      references: references.map(r => r.id),
      tags: [],
    };
  }
}