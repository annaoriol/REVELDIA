import { Observation } from "@/domain/discovery/Observation";

export interface CreateObservationInput {
  id: string;
  question: string;
  answer: string;
}

export class CreateObservation {
  execute(input: CreateObservationInput): Observation {
    return {
      id: input.id,
      question: input.question,
      answer: input.answer,
      evidenceIds: [],
      createdAt: new Date().toISOString(),
    };
  }
}