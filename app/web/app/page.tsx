"use client";

import { useState } from "react";

import HomeScreen from "@/components/HomeScreen";
import RevealTransition from "@/components/RevealTransition";
import LaboratorioScreen from "@/components/LaboratorioScreen";

import Workspace from "@/components/workspace/Workspace";

import { ProjectProvider } from "@/context/ProjectContext";

type Step =
  | "home"
  | "transition"
  | "laboratorio"
  | "mentor";

function AppFlow() {
  const [step, setStep] = useState<Step>("home");

  switch (step) {
    case "home":
      return (
        <HomeScreen
          onStart={() => setStep("transition")}
        />
      );

    case "transition":
      return (
        <RevealTransition
          onFinished={() => setStep("laboratorio")}
        />
      );

    case "laboratorio":
      return (
        <LaboratorioScreen
          onComplete={() => setStep("mentor")}
        />
      );

    case "mentor":
  return <Workspace />;

    default:
      return null;
  }
}

export default function Page() {
  return (
    <ProjectProvider>
      <AppFlow />
    </ProjectProvider>
  );
}