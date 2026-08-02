import { Project } from "@/types/project";

export function updateDossier(
  project: Project
): Project {
  return {
    ...project,

    updatedAt: new Date().toISOString(),
  };
}