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

import { executeRevealProcess } from "@/core/RevealProcess";

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

  const [currentObservation, setCurrentObservation] =
    useState(0);

  const observation =
    observations[currentObservation];

  function startReveal() {

    setState("ready");

  }

  function readyFinished() {

    setState("observe");

  }

  function reveal() {

    const updatedProject =
      executeRevealProcess(

        project,

        {
          id: observation.id,
          laboratory: observation.laboratory,
          image: observation.image,
          question: observation.question,
        },

        answer

      );

    setProject(updatedProject);

    setState("thinking");

    setTimeout(() => {

      setState("revelation");

    }, 4200);

  }

  function next() {

    const nextIndex =
      currentObservation + 1;

    setAnswer("");

    if (nextIndex >= observations.length) {

      console.log("Sesión terminada");

      return;

    }

    setCurrentObservation(nextIndex);

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