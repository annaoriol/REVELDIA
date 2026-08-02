import { Project } from "@/types/project";

import { CreativeDirector } from "@/src/application/creative-direction/CreativeDirector";
import { RevealArea } from "@/src/data/reveal/RevealAreas";

export interface LaboratoryContext {
  stage: string;
  specialist: {
    name: string;
    role: string;
    mission: string;
  };
  area: RevealArea;
  prompt: string;
  questions: string[];
}

export class LaboratoryEngine {
  constructor(
    private readonly project: Project
  ) {}

  public context(): LaboratoryContext | null {
    const director = new CreativeDirector(this.project);

    const specialist = director.specialist();
    const area = director.revealArea();

    if (!specialist || !area) {
      return null;
    }

    return {
      stage: director.stage(),
      specialist,
      area,
      prompt: area.prompt,
      questions: area.questions,
    };
  }

  public firstQuestion(): string | null {
    return this.context()?.questions[0] ?? null;
  }

  public nextQuestion(): string | null {
    const context = this.context();

    if (!context) {
      return null;
    }

    const answered =
      this.project.dossier.observations.filter(
        (o) => o.laboratory === context.area.id
      ).length;

    return context.questions[answered] ?? null;
  }
}