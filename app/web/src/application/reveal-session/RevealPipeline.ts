import { Dossier } from "@/src/domain/dossier/Dossier";
import { Reference } from "@/src/domain/references/Reference";

import { addReference } from "../references/AddReference";
import { moveReferenceToLightTable } from "../light-table/MoveReferenceToLightTable";
import { observeReference } from "../observation/ObserveReference";
import { generateInsight } from "../insight/GenerateInsight";

interface RevealPipelineParams {
  dossier: Dossier;
  reference: Reference;
}

export function revealPipeline({
  dossier,
  reference,
}: RevealPipelineParams) {
  const updatedDossier = addReference({
    dossier,
    referenceId: reference.id,
  });

  const lightTable = moveReferenceToLightTable({
    dossier: updatedDossier,
    referenceId: reference.id,
  });

  const observation = observeReference({
    reference,
  });

  const insight = generateInsight({
    observations: [observation],
  });

  return {
    dossier: lightTable,
    observation,
    insight,
  };
}