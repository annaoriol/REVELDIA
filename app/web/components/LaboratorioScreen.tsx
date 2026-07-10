"use client";

import { useState } from "react";

import RevealGallery from "./RevealGallery";
import SpecialistsLoader from "./SpecialistsLoader";

type LaboratorioScreenProps = {
  onComplete: () => void;
};

export default function LaboratorioScreen({
  onComplete,
}: LaboratorioScreenProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleContinue() {
    if (!selected) return;

    setLoading(true);
  }

  if (loading) {
    return (
      <SpecialistsLoader
        laboratory={selected!}
        onFinished={onComplete}
      />
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-[1700px] px-10 py-20">

        <RevealGallery
          selected={selected}
          onSelect={setSelected}
        />

        <div className="mt-20 flex justify-center">

          <button
            disabled={!selected}
            onClick={handleContinue}
            className={`
              rounded-full
              border
              px-10
              py-4
              uppercase
              tracking-[0.35em]
              transition-all
              duration-300
              ${
                selected
                  ? "border-[#00AFC7] text-[#00AFC7] hover:bg-[#00AFC710]"
                  : "cursor-not-allowed border-neutral-800 text-neutral-700"
              }
            `}
          >
            CONTINUAR →
          </button>

        </div>

      </div>

    </main>
  );
}