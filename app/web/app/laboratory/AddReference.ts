import type {
  Project,
  ProjectDNAReference,
} from "@/app/types";

export interface AddReferenceInput {
  project: Project;
  reference: ProjectDNAReference;
}

export class AddReference {
  execute(input: AddReferenceInput): Project {
    return {
      ...input.project,
      dna: {
        ...input.project.dna,
        references: [
          ...input.project.dna.references,
          input.reference,
        ],
      },
    };
  }
}