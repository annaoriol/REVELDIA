import type { Evidence } from "../evidence";
import type { EvidenceProvider } from "../evidence/EvidenceProvider";

import type { ResearchRequest } from "./ResearchRequest";

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