import { Project as LegacyProject } from "@/types/project";
import { Project as DomainProject } from "@/src/domain/project/Project";

export function toDomainProject(
  project: LegacyProject
): DomainProject {
  return {
    id: project.id,

    title: project.title,

    stage: project.stage,

    seed: project.seed
      ? {
          ...project.seed,
          createdAt: new Date(project.seed.createdAt),
        }
      : null,

    createdAt: new Date(project.createdAt),

    updatedAt: new Date(project.updatedAt),

    dossier: {
      id: project.id,
      projectId: project.id,
      createdAt: new Date(project.createdAt),
      updatedAt: new Date(project.updatedAt),

      referenceIds: [],
      lightTableReferenceIds: [],
      observationIds: [],
      insightIds: [],
    },
  };
}

export function toLegacyProject(
  _project: DomainProject
): LegacyProject {
  throw new Error("Not implemented");
}