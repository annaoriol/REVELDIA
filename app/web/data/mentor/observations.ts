export type Laboratory =
  | "identity"
  | "visual"
  | "narrative"
  | "strategy";

export interface Observation {
  id: string;

  laboratory: Laboratory;

  dossierKey: string;

  image: string;

  question: string;

  hint: string;

  revelation: string;
}

export const observations: Observation[] = [
  {
    id: "001",

    laboratory: "identity",

    dossierKey: "identity",

    image: "/images/mentor/observation-01.jpg",

    question:
      "¿Qué ha captado primero tu atención?",

    hint:
      "No existen respuestas correctas. Observa antes de responder.",

    revelation:
      "Parece que tu atención se dirige primero al contexto antes que al detalle. Esta es una primera hipótesis que iremos contrastando durante el proceso de revelado.",
  },
];