"use client";

import { useState } from "react";

import RevealGallery from "./RevealGallery";

type LaboratorioScreenProps = {

  onComplete: () => void;

};

export default function LaboratorioScreen({

  onComplete,

}: LaboratorioScreenProps) {

  const [selected, setSelected] =

    useState<string | null>(null);

  function handleSelect(id: string) {

    setSelected(id);

    setTimeout(() => {

      onComplete();

    }, 250);

  }

  return (

    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-[1700px] px-10 py-16">

        <RevealGallery

          selected={selected}

          onSelect={handleSelect}

        />

      </div>

    </main>

  );

}