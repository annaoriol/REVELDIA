import { ProjectDNA } from "./ProjectDNA";

export interface Project {
  id: string;
  name: string;
  stage: string;
  dna: ProjectDNA;
}