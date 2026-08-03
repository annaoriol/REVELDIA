import { Entity } from "../shared/types";

export interface Evidence extends Entity {
  specialist: string;

  text: string;

  confidence: number;
}