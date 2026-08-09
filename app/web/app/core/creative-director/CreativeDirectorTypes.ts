export type CreativeDirectorDecision =
  | "continue"
  | "sufficient";

export type CreativeDirectorStatus =
  | "exploring"
  | "sufficient";

export interface CreativeDirectorInput {
  intention: {
    whatToReveal: string;
    whatToTransmit: string;
    context: string;
  };

  revelaReferences: string[];

  userReferences: string[];

  selectedReferences: string[];

  proposalNumber: number;

  exploredReferenceIds: string[];
}

export interface CreativeDirectorOutput {
  decision: CreativeDirectorDecision;

  proposalNumber: number;

  exploredReferenceIds: string[];

  nextReferenceIds: string[];

  reason: string;

  nextExploration: string | null;
}

export interface CreativeDirectorEvaluation {
  decision: CreativeDirectorDecision;

  status: CreativeDirectorStatus;

  proposalNumber: number;

  exploredReferenceIds: string[];

  nextReferenceIds: string[];

  reason: string;

  nextExploration: string | null;
}
