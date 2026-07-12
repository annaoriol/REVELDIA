export type Laboratory =
  | "identity"
  | "visual"
  | "narrative"
  | "strategy";

export type ObservationPhase =
  | "observe"
  | "interpret"
  | "connect"
  | "reveal";

export interface Observation {

  id: string;

  laboratory: Laboratory;

  phase: ObservationPhase;

  difficulty: 1 | 2 | 3;

  dossierKey: string;

  dimension: string;

  objective: string;

  image: string;

  question: string;

  hint: string;

  tags: string[];

  revelation: string;

}

export const observations: Observation[] = [

  {

    id: "001",

    laboratory: "identity",

    phase: "observe",

    difficulty: 1,

    dossierKey: "identity",

    dimension: "Percepción",

    objective:
      "Descubrir cómo dirige la atención.",

    image:
      "/images/mentor/observation-01.jpg",

    question:
      "¿Qué ha captado primero tu atención?",

    hint:
      "No existen respuestas correctas. Observa antes de responder.",

    tags: [
      "luz",
      "silencio",
      "naturaleza",
      "contraste"
    ],

    revelation:
      "Parece que tu atención se dirige primero al contexto antes que al detalle. Esta es una primera hipótesis que iremos contrastando durante el proceso."

  },

];