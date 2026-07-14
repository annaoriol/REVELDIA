import { Dossier } from "./dossier";
import { Seed } from "./seed";

export interface Project {

  id: string;

  title: string;

  seed: Seed | null;

  createdAt: string;

  updatedAt: string;

  dossier: Dossier;

}