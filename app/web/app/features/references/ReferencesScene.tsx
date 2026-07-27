"use client";

import { useMemo, useState } from "react";

import SectionTitle from "@/app/components/ui/SectionTitle";

import { references } from "./data";
import ReferenceFilters from "./ReferenceFilters";
import ReferenceGrid from "./ReferenceGrid";
import ReferenceSearch from "./ReferenceSearch";

export default function ReferencesScene() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todas");

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

  return (
    <section className="mx-auto flex min-h-full w-full max-w-7xl flex-col py-[clamp(2rem,5vw,5rem)]">
      <SectionTitle
        eyebrow="Referencias"
        title="Comprender sin copiar"
        description="Las referencias ayudan a descubrir patrones, lenguajes y posibilidades para revelar una identidad propia."
      />

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
      />
    </section>
  );
}