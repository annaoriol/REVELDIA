import type { Project } from "@/app/types";

export interface LaboratoryProgress {
  observations: number;
  references: number;
  hasCreativeDirection: boolean;
  specialistAnalyses: number;
  hasRevelation: boolean;
}

export class GetLaboratoryProgress {
  execute(project: Project): LaboratoryProgress {
    return {
      observations: project.dna.observations.length,
      references: project.dna.references.length,
      hasCreativeDirection:
        project.dna.creativeDirection.criteria.length > 0 ||
        project.dna.creativeDirection.decisions.length > 0,
      specialistAnalyses:
        project.dna.specialistAnalyses.length,
      hasRevelation:
        project.dna.revelation !== null,
    };
  }
}