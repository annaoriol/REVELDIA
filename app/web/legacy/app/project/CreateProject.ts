import type { Project } from "@/app/types";

export interface CreateProjectInput {
  id: string;
  name: string;
}

export class CreateProject {
  execute(input: CreateProjectInput): Project {
    const now = new Date().toISOString();

    return {
      id: input.id,
      name: input.name,
      status: "draft",
      createdAt: now,
      updatedAt: now,
      dna: {
        identity: {
          whatToReveal: "",
          whatToTransmit: "",
          context: "",
          updatedAt: null,
        },
        references: [],
        lightTable: {
          referenceIds: [],
          groupIds: [],
          updatedAt: null,
        },
        relationships: [],
        observations: [],
        insights: [],
        sensoryLanguage: {
          terms: [],
          updatedAt: null,
        },
        sensoryDNA: null,
        creativeDirector: {
          criteria: [],
          decisions: [],
          updatedAt: null,
        },
        expressions: [],
        intention: {
          whatToReveal: "",
          whatToTransmit: "",
          context: "",
          updatedAt: null,
        },
        creativeDirection: {
          criteria: [],
          decisions: [],
          updatedAt: null,
        },
        specialistAnalyses: [],
        revelation: null,
        positivation: null,
        creativeSystem: null,
      },
    };
  }
}
