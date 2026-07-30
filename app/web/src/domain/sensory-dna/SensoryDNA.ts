import { Entity } from "../shared/types";

export interface SensoryDNA extends Entity {
  identityId: string;

  languageId: string;

  insightIds: string[];

  summary: string;
}