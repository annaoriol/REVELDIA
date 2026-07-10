import { Dossier } from "./dossier";
export interface Project {

  id: string;

  title: string;

  createdAt: string;

  updatedAt: string;

  dossier: Dossier;

}