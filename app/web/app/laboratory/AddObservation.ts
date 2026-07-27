import type {
  Project,
  ProjectDNAObservation,
} from "@/app/types";

export interface AddObservationInput {
  project: Project;
  observation: ProjectDNAObservation;
}

export class AddObservation {
  execute(input: AddObservationInput): Project {
    return {
      ...input.project,
      dna: {
        ...input.project.dna,
        observations: [
          ...input.project.dna.observations,
          input.observation,
        ],
      },
    };
  }
}