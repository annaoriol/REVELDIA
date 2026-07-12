import { ObservationContext } from "@/types/ObservationContext";
import { LabResult } from "@/types/LabResult";

export function analyzeVisual(
  context: ObservationContext
): LabResult {

  const confidence =
    !context.hasAnswer
      ? 0
      : Math.min(
          0.95,
          0.50 + context.length * 0.03
        );

  const patterns: string[] = [];

  //----------------------------------------------------
  // Luz
  //----------------------------------------------------

  if (
    context.words.includes("luz") ||
    context.words.includes("luminoso")
  ) {
    patterns.push("Interés por la luz");
  }

  //----------------------------------------------------
  // Color
  //----------------------------------------------------

  if (
    context.words.includes("color") ||
    context.words.includes("tono")
  ) {
    patterns.push("Sensibilidad cromática");
  }

  //----------------------------------------------------
  // Naturaleza
  //----------------------------------------------------

  if (
    context.words.includes("naturaleza") ||
    context.words.includes("bosque") ||
    context.words.includes("mar") ||
    context.words.includes("árbol")
  ) {
    patterns.push("Conexión con la naturaleza");
  }

  //----------------------------------------------------
  // Minimalismo
  //----------------------------------------------------

  if (
    context.words.includes("simple") ||
    context.words.includes("minimal") ||
    context.words.includes("vacío")
  ) {
    patterns.push("Minimalismo");
  }

  //----------------------------------------------------
  // Textura
  //----------------------------------------------------

  if (
    context.words.includes("textura") ||
    context.words.includes("material")
  ) {
    patterns.push("Atención a las texturas");
  }

  //----------------------------------------------------
  // Si todavía no hay patrones
  //----------------------------------------------------

  if (patterns.length === 0 && context.hasAnswer) {
    patterns.push("Lenguaje visual en exploración");
  }

  return {

    laboratory: "Visual",

    confidence,

    patterns,

    contradictions: [],

    recommendations: [

      "Continúa observando imágenes antes de consolidar un lenguaje visual.",

    ],

  };

}