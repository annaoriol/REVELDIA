import type { Project } from "@/app/types";

export class CanGenerateCreativeSystem {
  execute(project: Project): boolean {
    return (
      project.dna.revelation !== null &&
      project.dna.positivation !== null
    );
  }
}