import type {
  Project,
  ProjectDNACreativeDirection,
} from "@/app/types";

export interface AddCreativeDirectionInput {
  project: Project;
  creativeDirection: ProjectDNACreativeDirection;
}

export class AddCreativeDirection {
  execute(input: AddCreativeDirectionInput): Project {
    return {
      ...input.project,
      dna: {
        ...input.project.dna,
        creativeDirection: input.creativeDirection,
      },
    };
  }
}