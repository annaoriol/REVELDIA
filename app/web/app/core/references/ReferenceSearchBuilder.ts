import type {
  CreativeDirectorInput,
} from "../creative-director/CreativeDirectorTypes";

import type {
  ReferenceSearchQuery,
} from "./ReferenceProviderTypes";

export function buildReferenceSearchQuery(
  input: CreativeDirectorInput,
  exploration: string,
  creativeDirection: ReferenceSearchQuery["context"]["creativeDirection"],
  limit = 8
): ReferenceSearchQuery {
  const intention = [
    input.intention.whatToReveal,
    input.intention.whatToTransmit,
    input.intention.context,
  ]
    .filter(Boolean)
    .join(". ");

  const query = [
    intention,
    exploration,
  ]
    .filter(Boolean)
    .join(". ")
    .trim();

  return {
    query,

    context: {
      intention: input.intention,

      creativeDirection,

      userReferences:
        input.userReferences,

      selectedReferences:
        input.selectedReferences,

      exploredReferenceIds:
        input.exploredReferenceIds,

      proposalNumber:
        input.proposalNumber,
    },

    limit,
  };
}
