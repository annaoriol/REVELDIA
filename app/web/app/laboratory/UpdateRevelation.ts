import type {
  Project,
  ProjectDNARevelation,
} from "@/app/types";

export interface UpdateRevelationInput {
  project: Project;
  revelation: ProjectDNARevelation;
}

export class UpdateRevelation {
  execute(input: UpdateRevelationInput): Project {
    return {
      ...input.project,
      dna: {
        ...input.project.dna,
        revelation: input.revelation,
      },
    };
  }
}