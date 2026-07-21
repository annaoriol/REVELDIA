import { ReferenceId, StyleId } from "../shared/ids";
import { Timestamp } from "../shared/Timestamp";

export interface StylePattern {
  name: string;
  description: string;
  evidence: ReferenceId[];
}

export interface Style {
  id: StyleId;
  patterns: StylePattern[];
  toneSignals: string[];
  visualSignals: string[];
  narrativeSignals: string[];
  createdAt: Timestamp;
}
