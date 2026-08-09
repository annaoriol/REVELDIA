import type {
  CreativeDirectorInput,
  CreativeDirectorOutput,
} from "./CreativeDirectorTypes";

export interface CreativeDirectorProvider {
  evaluate(
    input: CreativeDirectorInput
  ): CreativeDirectorOutput;
}

export class MockCreativeDirectorProvider
  implements CreativeDirectorProvider
{
  evaluate(
    input: CreativeDirectorInput
  ): CreativeDirectorOutput {
    const totalMaterial =
      input.revelaReferences.length +
      input.userReferences.length;

    const exploredCount =
      input.exploredReferenceIds.length;

    const selectedCount =
      input.selectedReferences.length;

    const availableReferences =
      input.revelaReferences.filter(
        (id) =>
          !input.exploredReferenceIds.includes(id)
      );

    /*
     * MVP:
     *
     * El Director propone nuevas referencias
     * que todavía no han sido exploradas.
     *
     * Más adelante esta selección será realizada
     * por el modelo de IA utilizando intención,
     * estilo, contexto y relaciones semánticas.
     */

    const proposalSize = 2;

    const nextReferenceIds =
      availableReferences.slice(
        0,
        proposalSize
      );

    const minimumMaterial = 6;
    const minimumExplored = 4;

    const hasEnoughMaterial =
      totalMaterial >= minimumMaterial;

    const hasEnoughExploration =
      exploredCount >= minimumExplored;

    const hasUserSignal =
      input.userReferences.length > 0 ||
      selectedCount > 0;

    const sufficient =
      hasEnoughMaterial &&
      hasEnoughExploration &&
      hasUserSignal;

    if (sufficient) {
      return {
        decision: "sufficient",

        proposalNumber:
          input.proposalNumber,

        exploredReferenceIds:
          input.exploredReferenceIds,

        nextReferenceIds: [],

        reason:
          "El conjunto empieza a mostrar suficiente material, exploración y señal creativa para avanzar hacia la selección.",

        nextExploration: null,
      };
    }

    const nextExploration =
      exploredCount === 0
        ? "Explorar una primera familia de referencias que responda directamente a la intención del proyecto."
        : exploredCount < minimumExplored
          ? "Ampliar la exploración buscando contraste, diversidad y nuevas relaciones con la intención."
          : "Observar las referencias reunidas y buscar una dirección visual o conceptual complementaria.";

    return {
      decision: "continue",

      proposalNumber:
        input.proposalNumber + 1,

      exploredReferenceIds:
        input.exploredReferenceIds,

      nextReferenceIds,

      reason:
        "El Director Creativo propone nuevas referencias para ampliar y contrastar la exploración.",

      nextExploration,

    };
  }
}
