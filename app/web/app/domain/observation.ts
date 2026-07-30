import type { ProjectDNAObservation } from "@/app/types";

export interface CreateObservationInput {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
  evidenceIds?: string[];
  referenceIds?: string[];
  relationshipIds?: string[];
}

export function createObservation(
  input: CreateObservationInput
): ProjectDNAObservation {
  return {
    id: input.id,
    question: input.question,
    answer: input.answer,
    evidenceIds: input.evidenceIds ?? [],
    referenceIds: input.referenceIds ?? [],
    relationshipIds: input.relationshipIds ?? [],
    insightIds: [],
    status:
      input.relationshipIds && input.relationshipIds.length > 0
        ? "connected"
        : "registered",
    createdAt: input.createdAt,
    updatedAt: input.createdAt,
  };
}
