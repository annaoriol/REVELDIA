import { Observation } from "../observation/Observation";
import { Reference } from "../references/Reference";

export class ObservationEngine {
  createObservation(
    _title: string,
    description: string,
    _references: Reference[],
  ): Observation {
    return {
      id: crypto.randomUUID(),

      createdAt: new Date(),
      updatedAt: new Date(),

      laboratory: "identity",

      image: "",

      question: "",

      answer: description,

      keywords: [],

      confidence: 0,
    };
  }
}