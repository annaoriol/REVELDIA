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
    const updatedProject = registerObservation(
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
          observation={observation}
          onContinue={next}
        />
      )}

    </main>
  );
}