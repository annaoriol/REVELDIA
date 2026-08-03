import { Project } from "@/types/project";
import { Revelation } from "@/types/revelation";

export function updateProjectWithRevelation(
  project: Project,
  revelation: Revelation
): Project {
  return {
    ...project,

    dossier: {
      ...project.dossier,

      revelations: [
        ...project.dossier.revelations,
        revelation,
      ],
    },

    updatedAt: new Date().toISOString(),
  };
}