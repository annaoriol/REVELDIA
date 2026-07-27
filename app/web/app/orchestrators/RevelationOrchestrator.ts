import type { Project } from "@/app/types";

import { CanReveal } from "../laboratory/CanReveal";
import { LaboratoryService } from "../services/LaboratoryService";

export class RevelationOrchestrator {
  constructor(
    private readonly laboratory = new LaboratoryService(),
    private readonly canReveal = new CanReveal()
  ) {}

  isReady(project: Project): boolean {
    return this.canReveal.execute(project);
  }

  laboratoryService(): LaboratoryService {
    return this.laboratory;
  }
}