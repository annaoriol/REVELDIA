"use client";

import { useState } from "react";

import AppShell from "../components/layout/AppShell";
import HomeView from "../features/home/HomeView";
import RevelationIntroView from "../features/revelation/RevelationIntroView";

type PrototypeStep = "home" | "transition" | "revelation-intro";

export default function PrototypePage() {
  const [step, setStep] = useState<PrototypeStep>("home");

  return (
    <AppShell
      showTopBar={step !== "home"}
      showStatusBar={step !== "home"}
    >
      {step === "home" && (
        <HomeView onReveal={() => setStep("transition")} />
      )}

      {step === "transition" && (
        <section className="flex min-h-full items-center justify-center">
          <video
            autoPlay
            muted
            playsInline
            onEnded={() => setStep("revelation-intro")}
            className="h-full max-h-[72vh] w-full rounded-2xl object-cover"
          >
            <source
              src="/videos/transition.mp4"
              type="video/mp4"
            />
          </video>
        </section>
      )}

      {step === "revelation-intro" && <RevelationIntroView />}
    </AppShell>
  );
}