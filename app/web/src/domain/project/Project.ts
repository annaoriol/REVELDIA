import { Dossier } from "../dossier/Dossier";

export type ProjectStage =
  | "welcome"
  | "identity"
  | "references"
  | "light-table"
  | "observation"
  | "patterns"
  | "insight"
  | "creative-direction"
  | "specialists"
  | "synthesis"
  | "revelation"
  | "production"
  | "completed";

export interface Project {
  id: string;

  title: string;

  stage: ProjectStage;

  createdAt: Date;

  updatedAt: Date;

  dossier: Dossier;
}