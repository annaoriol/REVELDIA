export type ReferenceCandidateKind =
  | "visual"
  | "narrative"
  | "cultural"
  | "emotional"
  | "conceptual"
  | "editorial"
  | "cinematic";

export interface ReferenceCandidate {
  id: string;

  title: string;

  description: string;

  meaning: string;

  kind: ReferenceCandidateKind;

  image?: string;

  mediaUrl?: string;

  sourceUrl?: string;

  sourceName?: string;

  fileName?: string;

  mimeType?: string;

  category?: string;

  keywords: string[];

  reason: string;
}

export interface ReferenceSearchContext {
  intention: {
    whatToReveal: string;
    whatToTransmit: string;
    context: string;
  };

  userReferences: string[];

  selectedReferences: string[];

  exploredReferenceIds: string[];

  proposalNumber: number;
}

export interface ReferenceSearchQuery {
  query: string;

  context: ReferenceSearchContext;

  limit: number;
}

export interface ReferenceProvider {
  search(
    input: ReferenceSearchQuery
  ): Promise<ReferenceCandidate[]>;
}
