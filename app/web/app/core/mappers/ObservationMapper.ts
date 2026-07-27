import type { ProjectDNAObservation as Observation } from "@/app/types";

export interface ObservationState {
  id: string;
  question: string;
  answer: string;
}

export class ObservationMapper {
  static toState(observation: Observation): ObservationState {
    return {
      id: observation.id,
      question: observation.question,
      answer: observation.answer,
    };
  }

  static fromState(state: ObservationState): Observation {
    return {
      id: state.id,
      question: state.question,
      answer: state.answer,
      evidenceIds: [],
      createdAt: new Date().toISOString(),
    };
  }
}