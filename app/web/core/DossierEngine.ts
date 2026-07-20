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

  const last =
    project.dossier.revelations.at(-1);

  if (
    last &&
    JSON.stringify(last) ===
      JSON.stringify(revelation)
  ) {
    return project;
  }

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