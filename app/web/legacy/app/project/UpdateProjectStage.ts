import type { Project, ProjectStatus } from "@/app/types";

export interface UpdateProjectStageInput {
  project: Project;
  status: ProjectStatus;
}

export class UpdateProjectStage {
  execute(input: UpdateProjectStageInput): Project {
    return {
      ...input.project,
      status: input.status,
      updatedAt: new Date().toISOString(),
    };
  }
}