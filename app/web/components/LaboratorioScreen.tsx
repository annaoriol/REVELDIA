"use client";

import { useState } from "react";

import RevealGallery from "./RevealGallery";

type LaboratorioScreenProps = {
  onComplete: () => void;
};

export default function LaboratorioScreen({
  onComplete,
}: LaboratorioScreenProps) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(id: string) {
    setSelected(id);

    setTimeout(() => {
      onComplete();
    }, 250);
  }

  return (
    <main className="min-h-screen w-screen overflow-x-hidden bg-black text-white">

      <div className="w-full px-20 py-12 2xl:px-28">

        <RevealGallery
          selected={selected}
          onSelect={handleSelect}
        />

      </div>

    </main>
  );
}