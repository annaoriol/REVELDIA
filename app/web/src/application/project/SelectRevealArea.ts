import { Project } from "@/types/project";
import { Seed } from "@/types/seed";

import { getRevealArea } from "@/src/data/reveal/RevealAreas";

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