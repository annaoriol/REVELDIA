import type { CreativeDirectorInput } from "./CreativeDirectorTypes";

export interface CreativeDirectorRuleResult {
  sufficient: boolean;
  reason: string;
  nextExploration: string | null;
}

export const creativeDirectorRules = {
  minimumMaterial: 6,
  minimumExplored: 4,

  evaluate(
    input: CreativeDirectorInput
  ): CreativeDirectorRuleResult {
    const totalMaterial =
      input.revelaReferences.length +
      input.userReferences.length;

    const exploredCount =
      input.exploredReferenceIds.length;

    const selectedCount =
      input.selectedReferences.length;

    const hasEnoughMaterial =
      totalMaterial >= this.minimumMaterial;

    const hasEnoughExploration =
      exploredCount >= this.minimumExplored;

    const hasUserSignal =
      input.userReferences.length > 0 ||
      selectedCount > 0;

    const sufficient =
      hasEnoughMaterial &&
      hasEnoughExploration &&
      hasUserSignal;

    if (sufficient) {
      return {
        sufficient: true,
        reason:
          "Existe suficiente material y exploración para avanzar hacia la selección.",
        nextExploration: null,
      };
    }

    const nextExploration =
      exploredCount === 0
        ? "Explorar una primera familia de referencias relacionada con la intención."
        : exploredCount < this.minimumExplored
          ? "Ampliar la exploración buscando contraste, diversidad y nuevas relaciones."
          : "Observar el material reunido y buscar una dirección complementaria.";

    return {
      sufficient: false,
      reason:
        "Todavía existe margen para ampliar y contrastar el material creativo.",
      nextExploration,
    };
  },
};
