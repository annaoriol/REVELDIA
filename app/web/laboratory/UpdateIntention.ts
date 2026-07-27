import { Intention } from "@/domain/discovery/Intention";

export interface UpdateIntentionInput {
  current: Intention;
  whatToReveal: string;
  whatToTransmit: string;
  context?: string;
}

export class UpdateIntention {
  execute(input: UpdateIntentionInput): Intention {
    return {
      ...input.current,
      whatToReveal: input.whatToReveal,
      whatToTransmit: input.whatToTransmit,
      context: input.context,
    };
  }
}