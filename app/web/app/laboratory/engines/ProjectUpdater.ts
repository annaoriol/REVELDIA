import type { Project } from "@/app/types";

export class ProjectUpdater {
  static touch(project: Project): Project {
    return {
      ...project,
      updatedAt: new Date().toISOString(),
    };
  }
}