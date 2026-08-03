import { Project } from "@/domain/project/Project";

export class ProjectMapper {
  static clone(project: Project): Project {
    return {
      ...project,
      dna: {
        ...project.dna,
        observations: [...project.dna.observations],
        references: [...project.dna.references],
        creativeDirection: [...project.dna.creativeDirection],
        specialistAnalyses: [...project.dna.specialistAnalyses],
      },
    };
  }
}