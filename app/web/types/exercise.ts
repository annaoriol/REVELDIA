import { Laboratory } from "@/data/mentor/observations";

export type ExercisePhase =
  | "observe"
  | "discover"
  | "clarify"
  | "positivate";

export interface Exercise {

  id: string;

  laboratory: Laboratory;

  phase: ExercisePhase;

  title: string;

  objective: string;

  stimulus: string;

  image: string;

  prompt: string;

  hint: string;

  tags: string[];

  expectedEvidence: string[];

  difficulty: 1 | 2 | 3;

}