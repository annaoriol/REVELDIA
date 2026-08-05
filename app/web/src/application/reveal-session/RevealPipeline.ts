import { Dossier } from "@/src/domain/dossier/Dossier";
import { Reference } from "@/src/domain/references/Reference";

import { addReference } from "../references/AddReference";
import { moveReferenceToLightTable } from "../light-table/MoveReferenceToLightTable";
import { observeReference } from "../observation/ObserveReference";
import { generatePatterns } from "../patterns/GeneratePatterns";
import { generateInsight } from "../insight/GenerateInsight";

import { generateCreativeDirection } from "../creative-direction/GenerateCreativeDirection";
import { runSpecialists } from "../specialists/RunSpecialists";
import { generateSynthesis } from "../synthesis/GenerateSynthesis";
import { generateRevelation } from "../revelation/GenerateRevelation";

import type { CreativeDNA } from "@/src/domain/creative-dna/CreativeDNA";

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

  const creativeDirection = generateCreativeDirection({
    insights: [insight],
  });

  const specialistResults = runSpecialists({
    creativeDirection,
  });

  const synthesis = generateSynthesis({
    conclusions: specialistResults.map(
      (result) => result.result
    ),
  });

  /**
   * Adaptador temporal.
   *
   * El nuevo dominio genera CreativeDNA antes de Revelation.
   * Mientras el flujo no esté migrado completamente,
   * utilizamos un objeto mínimo.
   */
  const creativeDNA: CreativeDNA = {
    id: crypto.randomUUID(),

    projectId: dossier.projectId,

    patterns: [],

    essence: "",

    purpose: "",

    personality: [],

    values: [],

    positioning: "",

    audience: "",

    toneOfVoice: "",

    visualLanguage: [],

    narrativeDirection: [],

    differentiators: [],

    opportunities: [],

    risks: [],

    confidence: 0,

    createdAt: new Date(),

    updatedAt: new Date(),
  };

  const revelation = generateRevelation({
    projectId: dossier.projectId,

    creativeDNA,

    synthesis,
  });

  return {
    dossier: lightTable,

    observation,

    patterns,

    insight,

    creativeDirection,

    specialistResults,

    synthesis,

    creativeDNA,

    revelation,
  };
}