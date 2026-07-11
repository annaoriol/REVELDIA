"use client";

import { useState } from "react";

import MentorIntro from "./MentorIntro";
import ReadyScreen from "./ReadyScreen";
import ObservationScreen from "./ObservationScreen";
import RevealLoading from "./RevealLoading";
import RevelationCard from "./RevelationCard";
import DossierIndicator from "./DossierIndicator";

import { observations } from "@/data/mentor/observations";

import { useProject } from "@/context/ProjectContext";

import { registerObservation } from "@/core/ObservationEngine";
import { consultCouncil } from "@/core/Council";
import { generateRevelation } from "@/core/RevelationEngine";

type MentorState =
  | "intro"
  | "ready"
  | "observe"
  | "thinking"
  | "revelation";

export default function MentorScreen() {
  const { project, setProject } = useProject();

  const [state, setState] =
    useState<MentorState>("intro");

  const [answer, setAnswer] =
    useState("");

  const observation = observations[0];

  function startReveal() {
    setState("ready");
  }

  function readyFinished() {
    setState("observe");
  }

  function reveal() {

    //----------------------------------------
    // Registrar observación
    //----------------------------------------

    const projectWithObservation =
      registerObservation(
        project,
        {
          id: observation.id,
          laboratory: "identity",
          image: observation.image,
          question: observation.question,
          answer,
          createdAt: new Date().toISOString(),
        }
      );

    //----------------------------------------
    // Consejo Creativo
    //----------------------------------------

    const council =
      consultCouncil(
        projectWithObservation.dossier.observations
      );

    //----------------------------------------
    // Revelación
    //----------------------------------------

    const revelation =
      generateRevelation(council);

    //----------------------------------------
    // Guardar revelación
    //----------------------------------------

    const updatedProject = {

      ...projectWithObservation,

      updatedAt: new Date().toISOString(),

      dossier: {

        ...projectWithObservation.dossier,

        revelations: [

          ...projectWithObservation
            .dossier
            .revelations,

          revelation,

        ],

      },

    };

    //----------------------------------------

    setProject(updatedProject);

    setState("thinking");

    setTimeout(() => {

      setState("revelation");

    }, 4200);

  }

  function next() {

    setAnswer("");

    setState("observe");

  }

  return (

    <main className="min-h-screen bg-[#090909] text-white">

      <DossierIndicator />

      {state === "intro" && (
        <MentorIntro
          onStart={startReveal}
        />
      )}

      {state === "ready" && (
        <ReadyScreen
          onFinished={readyFinished}
        />
      )}

      {state === "observe" && (
        <ObservationScreen
          observation={observation}
          answer={answer}
          onAnswerChange={setAnswer}
          onContinue={reveal}
        />
      )}

      {state === "thinking" && (
        <RevealLoading />
      )}

      {state === "revelation" && (
        <RevelationCard
      onContinue={next}
      />
      )}

    </main>

  );

}