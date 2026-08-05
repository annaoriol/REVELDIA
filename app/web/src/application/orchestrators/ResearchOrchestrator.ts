import type {
  Evidence,
  EvidenceProvider,
} from "@/src/domain/evidence";

import type {
  ResearchRequest,
} from "@/src/domain/research";

export class ResearchOrchestrator {
  constructor(
    private readonly providers: EvidenceProvider[]
  ) {}

  async execute(
    request: ResearchRequest
  ): Promise<Evidence[]> {
    const responses = await Promise.all(
      this.providers.map((provider) =>
        provider.search(request)
      )
    );

    return responses.flat();
  }
}