import { RevealSessionId } from "./RevealSessionId";
import { RevealSessionState } from "./RevealSessionState";

export interface RevealSession {
  id: RevealSessionId;

  projectId: string;

  title: string;

  state: RevealSessionState;

  startedAt: Date;

  updatedAt: Date;
}