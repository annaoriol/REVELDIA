import { ReferenceId } from "../shared/ids";
import { Timestamp } from "../shared/Timestamp";

export type ReferenceKind =
  | "visual"
  | "narrative"
  | "cultural"
  | "emotional"
  | "conceptual"
  | "editorial"
  | "cinematic"
  | "audio"
  | "web";

export interface Reference {
  id: ReferenceId;
  kind: ReferenceKind;
  source?: string;
  description: string;
  meaning?: string;
  createdAt: Timestamp;
}
