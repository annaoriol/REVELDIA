import { Entity } from "../shared/types";

export type Laboratory =
  | "identity"
  | "visual"
  | "narrative"
  | "strategy"
  | "communication";

export interface Observation extends Entity {
  laboratory: Laboratory;

  image: string;

  question: string;

  answer: string;

  keywords: string[];

  confidence: number;
}