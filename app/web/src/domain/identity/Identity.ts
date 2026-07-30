import { Entity } from "../shared/types";

export interface Identity extends Entity {
  name: string;
  description?: string;

  intention?: string;

  values: string[];

  audience: string[];

  personality: string[];

  vision?: string;
}