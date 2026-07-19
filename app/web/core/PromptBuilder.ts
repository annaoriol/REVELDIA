import { Project } from "@/types/project";

import { ConversationDirector } from "./ConversationDirector";

export class PromptBuilder {
  constructor(
    private readonly project: Project
  ) {}

  public systemPrompt(): string {
    const conversation =
      new ConversationDirector(this.project).state();

    if (!conversation) {
      return "";
    }

    return conversation.systemPrompt;
  }

  public userPrompt(
    userMessage: string
  ): string {

    const seed = this.project.seed;

    const observations =
      this.project.dossier.observations;

    const revelations =
      this.project.dossier.revelations;

    return `
ÁREA

${seed?.title ?? "Sin área seleccionada"}

---

OBSERVACIONES

${JSON.stringify(observations, null, 2)}

---

REVELACIONES

${JSON.stringify(revelations, null, 2)}

---

MENSAJE DEL USUARIO

${userMessage}

---

INSTRUCCIONES

No respondas inmediatamente.

Primero interpreta.

Después identifica patrones.

Haz una única pregunta que permita avanzar el proceso.

No cierres la conversación.

No hagas listas.

No des consejos genéricos.

Mantén un tono cercano, creativo y estratégico.
`.trim();
  }
}