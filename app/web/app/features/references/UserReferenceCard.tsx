"use client";

import type { ProjectDNAReference } from "@/app/types";
import { useRevealStore } from "@/app/stores/useRevealStore";

interface UserReferenceCardProps {
  reference: ProjectDNAReference;
}

export default function UserReferenceCard({
  reference,
}: UserReferenceCardProps) {
  const lightTable = useRevealStore(
    (state) => state.lightTable
  );

  const toggleLightTable = useRevealStore(
    (state) => state.toggleLightTable
  );

  const isInLightTable =
    lightTable.some(
      (item) => item.id === reference.id
    );

  const lightTableReference = {
    id: reference.id,
    title: reference.description,
    category: "Tu referencia",
    image: "",
    orientation: "landscape" as const,
    description: reference.meaning,
    keywords: [reference.kind],
  };

  return (
    <article
      className={[
        "flex min-h-[250px] flex-col rounded-2xl border bg-black/35 p-5 transition-all",
        isInLightTable
          ? "border-cyan-300/70"
          : "border-white/10 hover:border-white/25",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">

        <span className="rounded-full border border-cyan-300/40 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-cyan-300">
          Tú aportas
        </span>

        <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
          {reference.kind}
        </span>

      </div>

      <h3 className="mt-5 text-xl font-light leading-tight text-white">
        {reference.description}
      </h3>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/55">
        {reference.meaning}
      </p>

      <div className="flex-1" />

      <button
        type="button"
        onClick={() =>
          toggleLightTable(
            lightTableReference
          )
        }
        className={[
          "mt-5 flex h-10 w-full items-center justify-center rounded-xl border text-[10px] uppercase tracking-[0.25em] transition-all",
          isInLightTable
            ? "border-cyan-300/60 bg-cyan-300/[0.08] text-cyan-300"
            : "border-white/10 text-white/50 hover:border-cyan-300/40 hover:text-cyan-300",
        ].join(" ")}
      >
        {isInLightTable
          ? "− Mesa de Luz"
          : "+ Mesa de Luz"}
      </button>
    </article>
  );
}
