import type {
  CreativeDirectorInput,
} from "../creative-director/CreativeDirectorTypes";

import {
  MockReferenceProvider,
} from "./MockReferenceProvider";

import {
  ReferenceSearchService,
} from "./ReferenceSearchService";

import {
  ReferenceDiscoveryService,
} from "./ReferenceDiscoveryService";

import type {
  Reference,
} from "@/app/features/references/data";

export class ReferenceDiscoveryOrchestrator {
  private readonly discoveryService: ReferenceDiscoveryService;

  constructor() {
    const provider =
      new MockReferenceProvider();

    const searchService =
      new ReferenceSearchService(
        provider
      );

    this.discoveryService =
      new ReferenceDiscoveryService(
        searchService
      );
  }

  async discover(
    input: CreativeDirectorInput,
    exploration: string,
    limit = 8
  ): Promise<Reference[]> {
    return this.discoveryService.discover(
      input,
      exploration,
      limit
    );
  }
}
