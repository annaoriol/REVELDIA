import { RevelationId } from "../shared/ids";
import { Timestamp } from "../shared/Timestamp";
import { Synthesis } from "../synthesis/Synthesis";

export interface Revelation {
  id: RevelationId;
  synthesis: Synthesis;
  identityStatement: string;
  essence: string;
  principles: string[];
  narrativeCore: string;
  visualDirection: string;
  createdAt: Timestamp;
}
