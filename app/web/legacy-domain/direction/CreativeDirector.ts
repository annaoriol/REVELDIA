import { MethodStage } from "../shared/MethodStage";
import { Timestamp } from "../shared/Timestamp";

export interface CreativeDirectorDecision {
  stage: MethodStage;
  decision: string;
  reason: string;
  createdAt: Timestamp;
}
