import { Dossier } from "@/src/domain/dossier/Dossier";

interface MoveReferenceToLightTableParams {
  dossier: Dossier;
  referenceId: string;
}

export function moveReferenceToLightTable({
  dossier,
  referenceId,
}: MoveReferenceToLightTableParams): Dossier {
  if (
    dossier.lightTableReferenceIds.includes(referenceId)
  ) {
    return dossier;
  }

  return {
    ...dossier,

    updatedAt: new Date(),

    lightTableReferenceIds: [
      ...dossier.lightTableReferenceIds,
      referenceId,
    ],
  };
}