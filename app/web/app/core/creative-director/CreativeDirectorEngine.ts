import type {
  CreativeDirectorEvaluation,
  CreativeDirectorInput,
} from "./CreativeDirectorTypes";

import { creativeDirectorRules } from "./CreativeDirectorRules";

import {
  MockCreativeDirectorProvider,
  type CreativeDirectorProvider,
} from "./MockCreativeDirectorProvider";

export class CreativeDirectorEngine {
  constructor(
    private readonly provider: CreativeDirectorProvider =
      new MockCreativeDirectorProvider()
  ) {}

  evaluate(
    input: CreativeDirectorInput
  ): CreativeDirectorEvaluation {
    const providerDecision =
      this.provider.evaluate(input);

    const rules =
      creativeDirectorRules.evaluate(input);

    const decision =
      providerDecision.decision ===
        "sufficient" &&
      rules.sufficient
        ? "sufficient"
        : "continue";

    const status =
      decision === "sufficient"
        ? "sufficient"
        : "exploring";

    return {
      decision,

      status,

      proposalNumber:
        providerDecision.proposalNumber,

      exploredReferenceIds:
        providerDecision.exploredReferenceIds,

      nextReferenceIds:
        providerDecision.nextReferenceIds,

      reason:
        decision === "sufficient"
          ? providerDecision.reason
          : rules.reason,

      nextExploration:
        decision === "sufficient"
          ? null
          : providerDecision.nextExploration ??
            rules.nextExploration,
    };
  }
}
