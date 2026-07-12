import { Dossier } from "@/types/dossier";
import { createInitialClarity } from "./Clarity";

export function createEmptyDossier(): Dossier {

  return {

    observations: [],

    revelations: [],

    clarity: createInitialClarity(),

  };

}