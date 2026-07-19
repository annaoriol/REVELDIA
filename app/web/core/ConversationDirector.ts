import { Project } from "@/types/project";

import { LaboratoryEngine } from "./LaboratoryEngine";

export interface ConversationTurn {
  speaker: "assistant" | "user";
  content: string;
}

export interface ConversationState {
  stage: string;
  systemPrompt: string;
  nextQuestion: string;
}

export class ConversationDirector {
  constructor(
    private readonly project: Project
  ) {}

  public state(): ConversationState | null {
    const engine = new LaboratoryEngine(this.project);

    const context = engine.context();

    if (!context) {
      return null;
    }

    const specialist = context.specialist;

    const systemPrompt = `
Eres ${specialist.name}.

Misión:
${specialist.mission}

Personalidad:
${specialist.personality}

Forma de pensar:
${specialist.thinkingStyle}

Nunca respondas como un chatbot.

Haz preguntas abiertas.

Ayuda al usuario a descubrir.

No des soluciones demasiado pronto.

Construye una revelación paso a paso.
`.trim();

    return {
      stage: context.stage,
      systemPrompt,
      nextQuestion: engine.firstQuestion() ?? "",
    };
  }
}