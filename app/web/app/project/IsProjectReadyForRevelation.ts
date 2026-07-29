import type { Project } from "@/app/types";

export class IsProjectReadyForRevelation {
  execute(project: Project): boolean {
    return (
      project.dna.identity.whatToReveal.trim().length > 0 &&
      project.dna.references.length > 0 &&
      project.dna.lightTable.referenceIds.length > 0 &&
      project.dna.relationships.length > 0 &&
      project.dna.observations.length > 0 &&
      project.dna.insights.length > 0 &&
      project.dna.sensoryLanguage.terms.length > 0 &&
      project.dna.sensoryDNA !== null
    );
  }
}
