import type {
  Project,
  ProjectDNACreativeDirection,
} from "@/app/types";

export interface UpdateStyleInput {
  project: Project;
  style: ProjectDNACreativeDirection;
}

export class UpdateStyle {
  execute(input: UpdateStyleInput): Project {
    return {
      ...input.project,
      dna: {
        ...input.project.dna,
        creativeDirection: input.style,
      },
    };
  }
}