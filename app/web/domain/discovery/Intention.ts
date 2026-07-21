import { IntentionId } from "../shared/ids";
import { Timestamp } from "../shared/Timestamp";

export interface Intention {
  id: IntentionId;
  whatToReveal: string;
  whatToTransmit: string;
  context?: string;
  createdAt: Timestamp;
}
