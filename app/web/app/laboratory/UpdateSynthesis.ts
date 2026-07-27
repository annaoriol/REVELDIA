import type { Project } from "@/app/types";

export interface UpdateSynthesisInput {
  project: Project;
  synthesis: unknown;
}

export class UpdateSynthesis {
  execute(input: UpdateSynthesisInput): Project {
    return input.project;
  }
}