import type { Project, ProjectStatus } from "@/app/types";

export class GetProjectStage {
  execute(project: Project): ProjectStatus {
    return project.status;
  }
}