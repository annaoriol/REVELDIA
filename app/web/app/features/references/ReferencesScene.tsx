"use client";

import { useMemo, useState } from "react";

import Button from "@/app/components/ui/Button";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { useRevealStore } from "@/app/stores/useRevealStore";

import { references, type Reference } from "./data";
import ReferenceDetail from "./ReferenceDetail";
import ReferenceFilters from "./ReferenceFilters";
import ReferenceGrid from "./ReferenceGrid";
import ReferenceSearch from "./ReferenceSearch";

export default function ReferencesScene() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todas");
  const [selectedReference, setSelectedReference] =
    useState<Reference | null>(null);

  const lightTable = useRevealStore((state) => state.lightTable);
  const setScene = useRevealStore((state) => state.setScene);

  const lightTableIds = useMemo(
    () => new Set(lightTable.map((reference) => reference.id)),
    [lightTable]
  );

  const filteredReferences = useMemo(() => {
    const query = search.trim().toLowerCase();

    return references.filter((reference) => {
      const matchesFilter =
        filter === "Todas" ||
        reference.category === filter;

      if (!matchesFilter) return false;

      if (!query.length) return true;

      return (
        reference.title.toLowerCase().includes(query) ||
        reference.category.toLowerCase().includes(query) ||
        reference.description.toLowerCase().includes(query) ||
        reference.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query)
        )
      );
    });
  }, [search, filter]);

  function handleSelectReference(reference: Reference) {
    setSelectedReference(reference);
  }

  function handleCloseDetail() {
    setSelectedReference(null);
  }

  return (
    <section className="mx-auto flex min-h-full w-full max-w-7xl flex-col py-[clamp(2rem,5vw,5rem)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Laboratorio"
            title="Evidencias"
            description="RƎVELA ha seleccionado estas evidencias para ayudarte a descubrir patrones, estilos y oportunidades para tu proyecto."
          />

          <Button
            variant="ghost"
            className="w-fit shrink-0"
            onClick={() => setScene("creative-director")}
          >
            Mesa de Luz ({lightTable.length})
          </Button>
        </div>

        <div className="flex items-center justify-between text-sm text-white/60">
          <span>
            {filteredReferences.length} evidencias disponibles
          </span>

          <span>
            {lightTable.length} seleccionadas
          </span>
        </div>
      </div>

      <ReferenceSearch
        value={search}
        onChange={setSearch}
      />

      <ReferenceFilters
        current={filter}
        onChange={setFilter}
      />

      <ReferenceGrid
        items={filteredReferences}
        onSelect={handleSelectReference}
        lightTableIds={lightTableIds}
      />

      <ReferenceDetail
        reference={selectedReference}
        open={selectedReference !== null}
        onClose={handleCloseDetail}
      />
    </section>
  );
}