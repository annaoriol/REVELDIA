import { Project } from "@/src/domain/project/Project";

import {
  getRevealArea,
  RevealArea,
} from "@/src/data/reveal/RevealAreas";

export class CreativeDirector {
  constructor(
    private readonly project: Project
  ) {}

  revealArea(): RevealArea | undefined {
    const id =
      this.project.stage === "welcome"
        ? "identity"
        : this.project.stage;

    return getRevealArea(id);
  }

  specialist() {
    const area = this.revealArea();

    if (!area) {
      return undefined;
    }

    return {
      name: area.specialist,
      role: area.specialist,
      mission: area.prompt,
    };
  }

  stage(): string {
    return this.project.stage;
  }
}