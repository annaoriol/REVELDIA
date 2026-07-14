import { Dossier } from "./dossier";
import { Seed } from "./seed";
import { ProjectStage } from "./ProjectStage";

export interface Project {

  id: string;

  title: string;

  stage: ProjectStage;

  seed: Seed | null;

  createdAt: string;

  updatedAt: string;

  dossier: Dossier;

}