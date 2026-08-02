import { Entity } from "../shared/types";

export interface Dossier extends Entity {
  projectId: string;

  identityId?: string;

  referenceIds: string[];

  lightTableReferenceIds: string[];

  observationIds: string[];

  insightIds: string[];

  synthesisId?: string;

  revelationId?: string;

  creativeSystemId?: string;
}