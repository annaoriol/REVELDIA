"use client";

import { useMemo, useState } from "react";

import SectionTitle from "@/app/components/ui/SectionTitle";

import EvidenceBoard from "./components/EvidenceBoard";
import UserEvidencePanel from "./components/UserEvidencePanel";

import { mockEvidence } from "./data/mockEvidence";

import type { Evidence } from "./types/Evidence";

export default function EvidenceScene() {
  const [items, setItems] = useState(mockEvidence);

  const selectedCount = useMemo(
    () => items.filter((item) => item.selected).length,
    [items]
  );

  function handleToggle(id: string) {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              selected: !item.selected,
            }
          : item
      )
    );
  }

  function handleInspect(evidence: Evidence) {
    console.log("Inspect:", evidence);
  }

  return (
    <section>
      <SectionTitle
        eyebrow="Inspiración"
        title="Referencias"
        description="RƎVELA encuentra referencias relevantes para tu proyecto y las convierte en inspiración para descubrir patrones, estilos y oportunidades."
      />

      {/* MESA DE LUZ */}

      <section className="mt-8 rounded-2xl border border-cyan-300/10 bg-cyan-300/5 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.30em] text-cyan-300">
              Mesa de Luz
            </p>

            <h3 className="mt-2 text-xl font-light text-white">
              {selectedCount} referencias seleccionadas
            </h3>

            <p className="mt-2 text-sm text-white/60">
              Selecciona las referencias que mejor representan
              la dirección de tu proyecto.
            </p>
          </div>

          <button
            type="button"
            className="
              rounded-xl
              border
              border-cyan-300/30
              px-5
              py-3
              text-sm
              text-cyan-300
              transition
              hover:bg-cyan-300/10
            "
          >
            Abrir Mesa de Luz →
          </button>
        </div>
      </section>

      {/* RƎVELA ENCUENTRA */}

      <section className="mt-14">
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-[0.30em] text-cyan-300">
            RƎVELA encuentra
          </p>

          <h2 className="mt-2 text-3xl font-light text-white">
            Inspiración para tu proyecto
          </h2>

          <p className="mt-3 max-w-3xl text-white/60 leading-7">
            Estas referencias han sido seleccionadas porque
            pueden aportar inspiración a la identidad,
            comunicación o estrategia de tu proyecto.
          </p>
        </div>

        <EvidenceBoard
          items={items}
          onToggle={handleToggle}
          onInspect={handleInspect}
        />
      </section>

      {/* TÚ APORTAS */}

      <section className="mt-20">
        <UserEvidencePanel />
      </section>
    </section>
  );
}