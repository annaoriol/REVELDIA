import type {
  CreativeDirectorInput,
} from "../creative-director/CreativeDirectorTypes";

import {
  ReferenceSearchService,
} from "./ReferenceSearchService";

import {
  mapReferenceCandidate,
} from "./ReferenceMapper";

import type {
  Reference,
} from "@/app/features/references/data";

export class ReferenceDiscoveryService {
  constructor(
    private readonly searchService: ReferenceSearchService
  ) {}

  async discover(
    input: CreativeDirectorInput,
    exploration: string,
    creativeDirection: Parameters<
      typeof this.searchService.search
    >[2],
    limit = 8
  ): Promise<Reference[]> {
    const candidates =
      await this.searchService.search(
        input,
        exploration,
        creativeDirection,
        limit
      );

    return candidates.map(
      mapReferenceCandidate
    );
  }
}
