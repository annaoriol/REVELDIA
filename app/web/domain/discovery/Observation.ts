import { Timestamp } from "../shared/Timestamp";
import { ObservationId } from "../shared/ids";

export interface Observation {
  id: ObservationId;

  question: string;

  answer: string;

  evidenceIds: string[];

  createdAt: Timestamp;
}