import { Dossier } from "@/types/dossier";
import { Observation } from "@/types/observation";
import { Revelation } from "@/types/revelation";
import { Clarity } from "@/types/Clarity";

export function createEmptyDossier(): Dossier {

  return {

    observations: [],

    evidence: [],

    revelations: [],

    clarity: {

      identity: 0,

      narrative: 0,

      visual: 0,

      strategy: 0,

    },

  };

}

export function addObservation(

  dossier: Dossier,

  observation: Observation

): Dossier {

  return {

    ...dossier,

    observations: [

      ...dossier.observations,

      observation,

    ],

  };

}

export function addRevelation(

  dossier: Dossier,

  revelation: Revelation

): Dossier {

  return {

    ...dossier,

    revelations: [

      ...dossier.revelations,

      revelation,

    ],

  };

}

export function updateClarity(

  dossier: Dossier,

  clarity: Clarity

): Dossier {

  return {

    ...dossier,

    clarity,

  };

}