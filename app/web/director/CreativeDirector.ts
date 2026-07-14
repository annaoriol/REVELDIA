import { Project } from "@/types/project";
import { DirectorDecision } from "./DirectorDecision";

export function evaluateProject(
  project: Project
): DirectorDecision {

  switch (project.stage) {

    case "welcome":

      return {

        stage: "observing",

        title: "Bienvenido",

        message:
          "Comienza una nueva sesión de observación.",

        canContinue: true,

      };

    case "observing":

      return {

        stage: "observing",

        title: "Observando",

        message:
          "Continúa recopilando observaciones.",

        canContinue: true,

      };

    case "revealing":

      return {

        stage: "revealing",

        title: "Revelando",

        message:
          "El Consejo está analizando las observaciones.",

        canContinue: true,

      };

    case "light-table":

      return {

        stage: "light-table",

        title: "Mesa de Luz",

        message:
          "Selecciona qué ideas merecen desarrollarse.",

        canContinue: true,

      };

    case "ideating":

      return {

        stage: "ideating",

        title: "Idear",

        message:
          "Empieza la exploración de soluciones.",

        canContinue: true,

      };

    case "transmitting":

      return {

        stage: "transmitting",

        title: "Transmitir",

        message:
          "Transforma las ideas en comunicación.",

        canContinue: true,

      };

    case "positivating":

      return {

        stage: "positivating",

        title: "Positivar",

        message:
          "Convierte la estrategia en impacto.",

        canContinue: true,

      };

    case "completed":

      return {

        stage: "completed",

        title: "Proceso completado",

        message:
          "El proyecto ha finalizado.",

        canContinue: false,

      };

  }

}