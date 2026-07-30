"use client";

import { useEffect } from "react";

import Button from "@/app/components/ui/Button";
import Panel from "@/app/components/ui/Panel";
import { useRevealStore } from "@/app/stores/useRevealStore";

import type { Reference } from "./data";

interface ReferenceDetailProps {
  reference: Reference | null;
  open: boolean;
  onClose: () => void;
}

export default function ReferenceDetail({
  reference,
  open,
  onClose,
}: ReferenceDetailProps) {
  const lightTable = useRevealStore((state) => state.lightTable);
  const toggleLightTable = useRevealStore(
    (state) => state.toggleLightTable
  );

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!reference) return null;

  return (
    <div
      aria-hidden={!open}
      className={[
        "fixed inset-0 z-40 flex justify-end transition-opacity duration-300",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      ].join(" ")}
    >
      <button
        type="button"
        aria-label="Cerrar detalle"
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
      />

      <Panel
        aria-label="Detalle de referencia"
        className={[
          "relative z-10 mr-6 mt-8 flex h-fit max-h-[80vh] w-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/95 text-white shadow-2xl transition-all duration-300",
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-8 opacity-0",
        ].join(" ")}
      >
        {/* CABECERA */}

        <div className="flex items-start justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/80">
              {reference.category}
            </p>

            <h2 className="mt-2 text-3xl font-light leading-tight">
              {reference.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-lg text-white/60 transition hover:border-white/30 hover:text-white"
          >
            ×
          </button>
        </div>

        {/* CONTENIDO */}

        <div className="flex flex-col px-6 py-5">
          <p className="text-sm leading-6 text-white/70">
            {reference.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {reference.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/60"
              >
                {keyword}
              </span>
            ))}
          </div>

          <Button
            variant="primary"
            className="mt-8 w-full"
            onClick={() => {
              toggleLightTable(reference);
              onClose();
            }}
          >
            Añadir a Mesa de Luz
          </Button>
        </div>
      </Panel>
    </div>
  );
}