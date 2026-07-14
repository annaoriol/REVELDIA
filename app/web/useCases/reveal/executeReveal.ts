import { Project } from "@/types/project";
import { Laboratory } from "@/types/observation";

import { registerObservation } from "../../core/ObservationEngine";
import { buildObservationContext } from "../../core/ObservationContext";
import { consultCouncil } from "@/laboratory/reveal/Council";
import { generateRevelation } from "../../core/RevelationEngine";
import { buildClarity } from "../../core/ClarityEngine";

export function executeRevealProcess(

  project: Project,

  observation: {

    id: string;

    laboratory: Laboratory;

    image: string;

    question: string;

  },

  answer: string

): Project {

  //----------------------------------
  // Registrar observación
  //----------------------------------

  const projectWithObservation =
    registerObservation(
      project,
      {
        id: observation.id,
        laboratory: observation.laboratory,
        image: observation.image,
        question: observation.question,
        answer,
        createdAt: new Date().toISOString(),
      }
    );

  //----------------------------------
  // Construir contexto
  //----------------------------------

  const context =
    buildObservationContext(answer);

  //----------------------------------
  // Consejo Creativo
  //----------------------------------

  const council =
    consultCouncil(context);

  //----------------------------------
  // Revelación
  //----------------------------------

  const revelation =
    generateRevelation(council);

  //----------------------------------
  // Claridad
  //----------------------------------

  const clarity =
    buildClarity(council);

  //----------------------------------
  // Actualizar proyecto
  //----------------------------------

  return {

    ...projectWithObservation,

    updatedAt: new Date().toISOString(),

    dossier: {

      ...projectWithObservation.dossier,

      clarity,

      revelations: [

        ...projectWithObservation.dossier.revelations,

        revelation,

      ],

    },

  };

}