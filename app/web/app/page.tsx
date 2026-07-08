"use client";

import { useState } from "react";

import HomeScreen from "@/components/HomeScreen";
import RevealTransition from "@/components/RevealTransition";
import LaboratorioScreen from "@/components/LaboratorioScreen";

type Step =
  | "home"
  | "transition"
  | "laboratorio"
  | "mentor";

export default function Page() {
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
      return (
        <main className="flex min-h-screen items-center justify-center bg-[#090909] text-white">

          <div className="max-w-3xl px-10">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.45em]
                text-[#0391A1]
              "
            >
              MENTOR CREATIVO
            </p>

            <h1
              className="
                mt-8
                font-[var(--font-space)]
                text-6xl
                font-light
                leading-tight
              "
            >
              Toda identidad existe
              <br />
              antes de ser visible.
            </h1>

            <p
              className="
                mt-10
                text-xl
                leading-9
                text-neutral-400
              "
            >
              Nuestro trabajo consiste en descubrirla,
              no en inventarla.
            </p>

            <p
              className="
                mt-16
                text-2xl
                leading-10
              "
            >
              Empecemos.
            </p>

          </div>

        </main>
      );

    default:
      return null;
  }
}