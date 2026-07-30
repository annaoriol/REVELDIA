import type { ProjectDNAObservation as Observation } from "@/app/types";
import { createObservation } from "@/app/domain/observation";

export interface ObservationState {
  id: string;
  question: string;
  answer: string;
  status: Observation["status"];
}

export class ObservationMapper {
  static toState(observation: Observation): ObservationState {
    return {
      id: observation.id,
      question: observation.question,
      answer: observation.answer,
      status: observation.status,
    };
  }

  static fromState(state: ObservationState): Observation {
    return createObservation({
      id: state.id,
      question: state.question,
      answer: state.answer,
      evidenceIds: [],
      createdAt: new Date().toISOString(),
    });
  }
}
