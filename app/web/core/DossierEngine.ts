import { Project } from "@/types/project";

import { buildCouncil } from "./CouncilEngine";
import { generateRevelation } from "./RevelationEngine";

export function updateDossier(
  project: Project
): Project {

  const council =
    buildCouncil(project);

  const revelation =
    generateRevelation(council);

  return {

    ...project,

    updatedAt:
      new Date().toISOString(),

    dossier: {

      ...project.dossier,

      revelations: [

        ...project.dossier.revelations,

        revelation,

      ],

    },

  };

}