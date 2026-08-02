import { Dossier } from "@/src/domain/dossier/Dossier";
import { Reference } from "@/src/domain/references/Reference";

import { addReference } from "../references/AddReference";
import { moveReferenceToLightTable } from "../light-table/MoveReferenceToLightTable";
import { observeReference } from "../observation/ObserveReference";
import { generatePatterns } from "../patterns/GeneratePatterns";
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

  const patterns = generatePatterns({
    observations: [observation],
  });

  const insight = generateInsight({
    patterns,
  });

  return {
    dossier: lightTable,
    observation,
    patterns,
    insight,
  };
}