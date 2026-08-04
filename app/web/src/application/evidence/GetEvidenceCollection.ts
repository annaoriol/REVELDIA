import { referenceToEvidence } from "../adapters/EvidenceAdapter";

import {
  references,
  type Reference,
} from "@/app/features/references/data";

import type { Evidence } from "@/src/domain/evidence";

export function getEvidenceCollection(): Evidence[] {
  return references.map((reference: Reference) =>
    referenceToEvidence(reference)
  );
}