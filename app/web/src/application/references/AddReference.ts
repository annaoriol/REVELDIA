import { Dossier } from "@/src/domain/dossier/Dossier";

interface AddReferenceParams {
  dossier: Dossier;
  referenceId: string;
}

export function addReference({
  dossier,
  referenceId,
}: AddReferenceParams): Dossier {
  if (dossier.referenceIds.includes(referenceId)) {
    return dossier;
  }

  return {
    ...dossier,

    updatedAt: new Date(),

    referenceIds: [
      ...dossier.referenceIds,
      referenceId,
    ],
  };
}