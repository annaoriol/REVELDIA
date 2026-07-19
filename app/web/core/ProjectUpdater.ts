import { Project } from "@/types/project";
import { Seed } from "@/types/seed";
import { Revelation } from "@/types/revelation";

import { getRevealArea } from "./RevealAreas";

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

export function selectRevealArea(
  project: Project,
  areaId: string
): Project {

  const area = getRevealArea(areaId);

  if (!area) {
    return project;
  }

  const seed: Seed = {
    id: area.id,
    title: area.title,
    intention: "",
    status: "revealing",
    createdAt: new Date().toISOString(),
  };

  return {
    ...project,
    title: area.title,
    seed,
    updatedAt: new Date().toISOString(),
  };
}