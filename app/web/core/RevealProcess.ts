import { Project } from "@/types/project";

import { registerObservation } from "./ObservationEngine";
import { buildObservationContext } from "./ObservationContext";
import { consultCouncil } from "./Council";
import { generateRevelation } from "./RevelationEngine";

export function executeRevealProcess(

  project: Project,

  observation: {

    id: string;

    laboratory: string;

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
  // Generar Revelación
  //----------------------------------

  const revelation =
    generateRevelation(council);

  //----------------------------------
  // Actualizar proyecto
  //----------------------------------

  return {

    ...projectWithObservation,

    updatedAt: new Date().toISOString(),

    dossier: {

      ...projectWithObservation.dossier,

      revelations: [

        ...projectWithObservation.dossier.revelations,

        revelation,

      ],

    },

  };

}