import { Entity } from "../shared/types";
import { RevealSessionState } from "./RevealSessionState";

export interface RevealSession extends Entity {
  projectId: string;

  title: string;

  state: RevealSessionState;

  identityId?: string;

  referenceIds: string[];

  observationIds: string[];

  insightIds: string[];
}