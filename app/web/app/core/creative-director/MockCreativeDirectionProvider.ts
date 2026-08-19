import type {
  CreativeDirectorBrief,
  CreativeDirection,
} from "./CreativeDirectorTypes";

import type {
  CreativeDirectionProvider,
} from "./CreativeDirectionProvider";

export class MockCreativeDirectionProvider
  implements CreativeDirectionProvider
{
  direct(
    brief: CreativeDirectorBrief
  ): CreativeDirection {
    const format =
      brief.format.trim() ||
      "contenido";

    const projectType =
      brief.projectType.trim() ||
      "proyecto";

    const intention =
      brief.intention.whatToReveal.trim() ||
      brief.intention.whatToTransmit.trim();

    return {
      creativeReading:
        intention
          ? `La oportunidad creativa está en encontrar una forma de expresar ${intention.toLowerCase()} dentro de un ${projectType.toLowerCase()}.`
          : `El proyecto necesita descubrir una dirección creativa coherente con su intención y contexto.`,

      formatDirectives: [
        `La dirección debe respetar la naturaleza del formato ${format}.`,
        "El formato condiciona el ritmo, la estructura y la experiencia de recepción.",
        "Las referencias pueden proceder de cualquier formato si aportan una relación creativa relevante.",
      ],

      explorationTerritories: [
        "Explorar asociaciones directas con la intención.",
        "Buscar contraste y diversidad entre las referencias.",
        "Detectar relaciones inesperadas que puedan abrir una dirección propia.",
      ],

      questions: [
        "¿Qué queremos revelar realmente?",
        "¿Qué relación entre las referencias merece ser explorada?",
        "¿Qué podría hacer reconocible esta dirección creativa?",
      ],

      nextAction:
        "explore-references",
    };
  }
}
