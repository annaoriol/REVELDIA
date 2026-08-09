"use client";

import { useRevealStore } from "@/app/stores/useRevealStore";

export default function CreativeDirectorTest() {
  const creativeDirector = useRevealStore(
    (state) => state.project.dna.creativeDirector
  );

  const evaluateCreativeDirector = useRevealStore(
    (state) => state.evaluateCreativeDirector
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[360px] rounded-2xl border border-cyan-300/20 bg-black/90 p-5 text-white shadow-2xl">
      <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">
        Director Creativo · Test
      </p>

      <p className="mt-3 text-sm text-white/60">
        Propuesta actual
      </p>

      <p className="mt-1 text-2xl">
        {creativeDirector.proposalNumber}
      </p>

      <p className="mt-4 text-sm text-white/60">
        Estado
      </p>

      <p className="mt-1 text-sm text-white">
        {creativeDirector.status}
      </p>

      <p className="mt-4 text-sm text-white/60">
        Decisión
      </p>

      <p className="mt-1 text-sm text-white">
        {creativeDirector.decision ?? "—"}
      </p>

      <p className="mt-4 text-sm text-white/60">
        Historial
      </p>

      <p className="mt-1 text-sm text-white">
        {creativeDirector.decisionHistory.length} rondas
      </p>

      <button
        type="button"
        onClick={evaluateCreativeDirector}
        className="mt-5 w-full rounded-xl border border-cyan-300/30 px-4 py-3 text-sm text-cyan-300 transition hover:bg-cyan-300/10"
      >
        Evaluar Director
      </button>
    </div>
  );
}
