import type { Project } from "@/app/types";

export interface LaboratoryProgress {
  hasIdentity: boolean;
  references: number;
  lightTableItems: number;
  relationships: number;
  observations: number;
  insights: number;
  sensoryTerms: number;
  hasSensoryDNA: boolean;
  hasCreativeDirector: boolean;
  expressions: number;
}

export class GetLaboratoryProgress {
  execute(project: Project): LaboratoryProgress {
    return {
      hasIdentity:
        project.dna.identity.whatToReveal.trim().length > 0 ||
        project.dna.identity.whatToTransmit.trim().length > 0 ||
        project.dna.identity.context.trim().length > 0,
      references: project.dna.references.length,
      lightTableItems: project.dna.lightTable.referenceIds.length,
      relationships: project.dna.relationships.length,
      observations: project.dna.observations.length,
      insights: project.dna.insights.length,
      sensoryTerms: project.dna.sensoryLanguage.terms.length,
      hasSensoryDNA: project.dna.sensoryDNA !== null,
      hasCreativeDirector:
        project.dna.creativeDirector.criteria.length > 0 ||
        project.dna.creativeDirector.decisions.length > 0,
      expressions: project.dna.expressions.length,
    };
  }
}
