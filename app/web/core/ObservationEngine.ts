import { Observation } from "../types/observation";
import { Project } from "../types/project";

export function registerObservation(
  project: Project,
  observation: Observation
): Project {

  return {

    ...project,

    updatedAt: new Date().toISOString(),

    dossier: {

      ...project.dossier,

      observations: [

        ...project.dossier.observations,

        observation

      ]

    }

  };

}