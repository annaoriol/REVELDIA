import type { Project } from "@/app/types";

export class IsProjectReadyForRevelation {
  execute(project: Project): boolean {
    return (
      project.dna.observations.length > 0 &&
      project.dna.references.length > 0 &&
      project.dna.creativeDirection.criteria.length > 0 &&
      project.dna.specialistAnalyses.length > 0 &&
      project.dna.revelation !== null
    );
  }
}