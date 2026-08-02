import { Entity } from "../shared/types";

export interface Pattern extends Entity {
  title: string;

  description: string;

  observationIds: string[];

  confidence: number;
}