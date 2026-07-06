"use client";

import { useState } from "react";

import HomeScreen from "@/components/HomeScreen";
import LaboratorioScreen from "@/components/LaboratorioScreen";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div className="transition-all duration-500">
      {started ? (
        <LaboratorioScreen />
      ) : (
        <HomeScreen onStart={() => setStarted(true)} />
      )}
    </div>
  );
}