import type { Project, ProjectDNA } from "@/app/types";

export interface UpdateProjectDNAInput {
  project: Project;
  dna: ProjectDNA;
}

export class UpdateProjectDNA {
  execute(input: UpdateProjectDNAInput): Project {
    return {
      ...input.project,
      dna: input.dna,
      updatedAt: new Date().toISOString(),
    };
  }
}