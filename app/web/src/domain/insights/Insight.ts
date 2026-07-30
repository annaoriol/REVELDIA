import { Entity } from "../shared/types";

export interface Insight extends Entity {
  title: string;

  description: string;

  observations: string[];

  confidence: number;
}