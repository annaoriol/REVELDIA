import type {
  Project,
  ProjectDNACreativeDirection,
} from "@/app/types";

import { ProjectUpdater } from "./engines/ProjectUpdater";

export interface UpdateStyleInput {
  project: Project;
  style: ProjectDNACreativeDirection;
}

export class UpdateStyle {
  execute(input: UpdateStyleInput): Project {
    const updatedProject = {
      ...input.project,
      dna: {
        ...input.project.dna,
        creativeDirection: input.style,
      },
    };

    return ProjectUpdater.touch(updatedProject);
  }
}