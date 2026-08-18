"use client";

import { useMemo, useState } from "react";

import Button from "@/app/components/ui/Button";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { useRevealStore } from "@/app/stores/useRevealStore";

import UserEvidencePanel from "@/app/features/evidence/components/UserEvidencePanel";

import { references, type Reference } from "./data";
import ReferenceDetail from "./ReferenceDetail";
import ReferenceGrid from "./ReferenceGrid";
import ReferenceSearch from "./ReferenceSearch";

export default function ReferencesScene() {
  const [search, setSearch] = useState("");

  const [selectedReference, setSelectedReference] =
    useState<Reference | null>(null);

  const lightTable = useRevealStore(
    (state) => state.lightTable
  );

  const discoveredReferences =
    useRevealStore(
      (state) => state.discoveredReferences
    );

  const toggleLightTable = useRevealStore(
    (state) => state.toggleLightTable
  );

  const setScene = useRevealStore(
    (state) => state.setScene
  );

  const lightTableIds = useMemo(
    () =>
      new Set(
        lightTable.map(
          (reference) => reference.id
        )
      ),
    [lightTable]
  );

  const availableReferences = useMemo(() => {
    const byId = new Map<string, Reference>();

    /*
     * Las referencias descubiertas por el Provider
     * aparecen primero porque representan la
     * exploración actual del Director Creativo.
     */
    discoveredReferences.forEach((reference) => {
      byId.set(reference.id, reference);
    });

    references.forEach((reference) => {
      if (!byId.has(reference.id)) {
        byId.set(reference.id, {
          ...reference,
          origin:
            reference.origin ?? "revela",
        });
      }
    });

    return Array.from(byId.values());
  }, [discoveredReferences]);

  const filteredReferences = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query.length) {
      return availableReferences;
    }

    return availableReferences.filter((reference) => {
      return (
        reference.title
          .toLowerCase()
          .includes(query) ||
        reference.category
          .toLowerCase()
          .includes(query) ||
        reference.description
          .toLowerCase()
          .includes(query) ||
        reference.keywords.some((keyword) =>
          keyword
            .toLowerCase()
            .includes(query)
        )
      );
    });
  }, [search, availableReferences]);

  function handleSelectReference(
    reference: Reference
  ) {
    setSelectedReference(reference);
  }

  function handleCloseDetail() {
    setSelectedReference(null);
  }

  return (
    <section>
      {/* =================================================
          CABECERA
      ================================================= */}

      <SectionTitle
        eyebrow="Inspiración"
        title="Referencias"
      />

      <p className="mt-4 max-w-4xl text-sm leading-7 text-white/60">
        <span className="text-white">R</span>
        <span className="text-cyan-300">Ǝ</span>
        <span className="text-white">
          VELA
        </span>{" "}
        encuentra referencias relevantes para tu
        proyecto y las convierte en inspiración
        para descubrir patrones, estilos y
        oportunidades.
      </p>

      {/* =================================================
          REFERENCIAS DE RƎVELA
      ================================================= */}

      <section className="mt-10">

        <div className="mb-6">

          <p className="text-[10px] uppercase tracking-[0.32em] text-cyan-300">
            RƎVELA proporciona
          </p>

          <h2 className="mt-2 text-2xl font-light text-white">
            Inspiración para tu proyecto
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
            Explora las referencias que RƎVELA
            propone como inspiración para tu
            proyecto.
          </p>

        </div>

        {/* =================================================
            CONTADORES
        ================================================= */}

        <div className="mb-5 flex items-center justify-between text-sm text-white/50">

          <span>
            {filteredReferences.length}{" "}
            {filteredReferences.length === 1
              ? "resultado"
              : "resultados"}
          </span>

          <span>
            {lightTable.length}{" "}
            {lightTable.length === 1
              ? "seleccionada"
              : "seleccionadas"}
          </span>

        </div>

        {/* =================================================
            GRID
        ================================================= */}

        <ReferenceGrid
          items={filteredReferences}
          onSelect={handleSelectReference}
          onToggleLightTable={
            toggleLightTable
          }
          lightTableIds={lightTableIds}
        />

      </section>

      {/* =================================================
          BUSCADOR
      ================================================= */}

      <section className="mt-8">
        <ReferenceSearch
          value={search}
          onChange={setSearch}
        />
      </section>

      {/* =================================================
          TÚ APORTAS
      ================================================= */}

      <section className="mt-20">
        <UserEvidencePanel
          onOpenLightTable={() =>
            setScene("light-table")
          }
        />
      </section>

      {/* =================================================
          AMPLIADORA
      ================================================= */}

      <ReferenceDetail
        reference={selectedReference}
        open={
          selectedReference !== null
        }
        onClose={
          handleCloseDetail
        }
      />

    </section>
  );
}