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
        intention: {
          whatToReveal: "",
          whatToTransmit: "",
          context: "",
          updatedAt: null,
        },
        observations: [],
        references: [],
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