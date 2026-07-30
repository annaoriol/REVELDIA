import type {
  Project,
  ProjectDNAReference,
} from "@/app/types";

import { ProjectUpdater } from "./engines/ProjectUpdater";

export interface AddReferenceInput {
  project: Project;
  reference: ProjectDNAReference;
}

export class AddReference {
  execute(input: AddReferenceInput): Project {
    const updatedProject = {
      ...input.project,
      dna: {
        ...input.project.dna,
        references: [
          ...input.project.dna.references,
          input.reference,
        ],
      },
    };

    return ProjectUpdater.touch(updatedProject);
  }
}