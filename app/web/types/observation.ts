export type Laboratory =
  | "identity"
  | "visual"
  | "narrative"
  | "strategy"
  | "communication";

export interface Observation {
  id: string;

  laboratory: Laboratory;

  image: string;

  question: string;

  answer: string;

  createdAt: string;

  keywords: string[];

  confidence: number;
}