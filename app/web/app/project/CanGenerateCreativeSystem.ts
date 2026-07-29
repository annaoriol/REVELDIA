import type { Project } from "@/app/types";

export class CanGenerateCreativeSystem {
  execute(project: Project): boolean {
    return (
      project.dna.sensoryDNA !== null &&
      project.dna.creativeDirector.decisions.length > 0
    );
  }
}
