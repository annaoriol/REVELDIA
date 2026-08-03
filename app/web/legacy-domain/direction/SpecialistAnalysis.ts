import { Confidence } from "../shared/Confidence";
import {
  SpecialistAnalysisId,
  SpecialistId,
} from "../shared/ids";
import { Timestamp } from "../shared/Timestamp";

export interface SpecialistAnalysis {
  id: SpecialistAnalysisId;
  specialistId: SpecialistId;
  observations: string[];
  patterns: string[];
  tensions: string[];
  confidence: Confidence;
  createdAt: Timestamp;
}
