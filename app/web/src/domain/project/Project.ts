import { Dossier } from "../dossier/Dossier";
import { Seed } from "../seed/Seed";

export type ProjectStage =
  | "welcome"
  | "observing"
  | "revealing"
  | "light-table"
  | "ideating"
  | "transmitting"
  | "positivating"
  | "completed";

export interface Project {
  id: string;

  title: string;

  stage: ProjectStage;

  seed: Seed | null;

  createdAt: Date;

  updatedAt: Date;

  dossier: Dossier;
}