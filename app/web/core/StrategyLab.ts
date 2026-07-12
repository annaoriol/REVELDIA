import { ObservationContext } from "@/types/ObservationContext";
import { LabResult } from "@/types/LabResult";

export function analyzeStrategy(
  context: ObservationContext
): LabResult {

  const confidence =
    !context.hasAnswer
      ? 0
      : Math.min(
          0.95,
          0.42 + context.length * 0.035
        );

  const patterns: string[] = [];

  //----------------------------------------------------
  // Propósito
  //----------------------------------------------------

  if (
    context.words.includes("propósito") ||
    context.words.includes("misión")
  ) {
    patterns.push("Orientación al propósito");
  }

  //----------------------------------------------------
  // Valor
  //----------------------------------------------------

  if (
    context.words.includes("valor") ||
    context.words.includes("diferencia")
  ) {
    patterns.push("Propuesta de valor");
  }

  //----------------------------------------------------
  // Público
  //----------------------------------------------------

  if (
    context.words.includes("cliente") ||
    context.words.includes("personas") ||
    context.words.includes("audiencia")
  ) {
    patterns.push("Orientación al público");
  }

  //----------------------------------------------------
  // Marca
  //----------------------------------------------------

  if (
    context.words.includes("marca")
  ) {
    patterns.push("Construcción de marca");
  }

  //----------------------------------------------------
  // Futuro
  //----------------------------------------------------

  if (
    context.words.includes("futuro") ||
    context.words.includes("crecer") ||
    context.words.includes("evolución")
  ) {
    patterns.push("Visión de crecimiento");
  }

  //----------------------------------------------------
  // Si no hay patrones
  //----------------------------------------------------

  if (patterns.length === 0 && context.hasAnswer) {
    patterns.push("Estrategia en exploración");
  }

  return {

    laboratory: "Estrategia",

    confidence,

    patterns,

    contradictions: [],

    recommendations: [

      "Continúa definiendo tu propuesta de valor antes de consolidar la estrategia.",

    ],

  };

}