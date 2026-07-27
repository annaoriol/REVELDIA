import { Project } from "@/domain/project/Project";

export interface ProjectSummary {
  name: string;
  stage: string;
  observations: number;
  references: number;
 specialists: number;
  hasSynthesis: boolean;
  hasRevelation: boolean;
}

export class GetProjectSummary {
  execute(project: Project): ProjectSummary {
    return {
      name: project.name,
      stage: project.stage,
      observations: project.dna.observations.length,
      references: project.dna.references.length,
      specialists: project.dna.specialistAnalyses.length,
      hasSynthesis: project.dna.synthesis !== undefined,
      hasRevelation: project.dna.revelation !== undefined,
    };
  }
}