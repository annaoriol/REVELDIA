export type SessionStep =
  | "intro"
  | "ready"
  | "observe"
  | "thinking"
  | "revelation"
  | "finished";

export interface Session {

  step: SessionStep;

  observationIndex: number;

  startedAt: string;

}