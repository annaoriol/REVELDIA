import { SpecialistAnalysis } from "../direction/SpecialistAnalysis";
import { Confidence } from "../shared/Confidence";
import { SynthesisId } from "../shared/ids";
import { Timestamp } from "../shared/Timestamp";

export interface Synthesis {
  id: SynthesisId;
  analyses: SpecialistAnalysis[];
  centralInsight: string;
  coherentPatterns: string[];
  contradictions: string[];
  confidence: Confidence;
  createdAt: Timestamp;
}
