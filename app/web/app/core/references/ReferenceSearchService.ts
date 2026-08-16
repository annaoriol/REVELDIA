import type {
  CreativeDirectorInput,
} from "../creative-director/CreativeDirectorTypes";

import {
  buildReferenceSearchQuery,
} from "./ReferenceSearchBuilder";

import type {
  ReferenceCandidate,
  ReferenceProvider,
} from "./ReferenceProviderTypes";

export class ReferenceSearchService {
  constructor(
    private readonly provider: ReferenceProvider
  ) {}

  async search(
    input: CreativeDirectorInput,
    exploration: string,
    limit = 8
  ): Promise<ReferenceCandidate[]> {
    const query =
      buildReferenceSearchQuery(
        input,
        exploration,
        limit
      );

    return this.provider.search(query);
  }
}
