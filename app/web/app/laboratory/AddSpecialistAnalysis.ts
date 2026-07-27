import type {
  Project,
  ProjectDNASpecialistAnalysis,
} from "@/app/types";

export interface AddSpecialistAnalysisInput {
  project: Project;
  analysis: ProjectDNASpecialistAnalysis;
}

export class AddSpecialistAnalysis {
  execute(input: AddSpecialistAnalysisInput): Project {
    return {
      ...input.project,
      dna: {
        ...input.project.dna,
        specialistAnalyses: [
          ...input.project.dna.specialistAnalyses,
          input.analysis,
        ],
      },
    };
  }
}