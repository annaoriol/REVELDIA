import { Entity } from "../shared/types";

export interface Observation extends Entity {
  title: string;

  description: string;

  references: string[];

  tags: string[];
}