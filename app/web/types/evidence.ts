export type EvidenceType =

  | "idea"
  | "observation"
  | "pattern"
  | "contradiction"
  | "hypothesis"
  | "revelation"
  | "reference"
  | "decision"
  | "prompt"
  | "asset";

export type EvidenceSource =

  | "user"
  | "mentor"
  | "director"
  | "specialist"
  | "ai";

export interface Evidence {

  id: string;

  type: EvidenceType;

  source: EvidenceSource;

  title: string;

  content: unknown;

  confidence: number;

  tags: string[];

  createdAt: string;

}