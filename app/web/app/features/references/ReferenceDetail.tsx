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
  const isReferenceInLightTable = reference
    ? lightTable.some((item) => item.id === reference.id)
    : false;

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
        aria-label="Cerrar detalle de referencia"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/20 backdrop-blur-[1px]"
      />

      <Panel
        aria-label="Detalle de referencia"
        className={[
          "relative z-10 mr-[clamp(1rem,3vw,2rem)] mt-[clamp(1rem,4vh,2rem)] flex h-[calc(100dvh-clamp(2rem,8vh,4rem))] w-[min(calc(100vw-2rem),28.75rem)] flex-col overflow-hidden rounded-2xl border-white/12 bg-neutral-950/96 text-white shadow-2xl transition duration-300 ease-out",
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-8 opacity-0",
        ].join(" ")}
      >
        {reference && (
          <>
            <div className="relative aspect-[4/3] shrink-0 overflow-hidden border-b border-white/10 bg-white/[0.03]">
              <img
                src={reference.image}
                alt={reference.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

              <button
                type="button"
                aria-label="Cerrar panel"
                onClick={onClose}
                className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/45 text-lg leading-none text-white/80 transition-colors duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                x
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col px-7 py-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-cyan-300/85">
                {reference.category}
              </p>

              <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-light leading-[0.92] text-white">
                {reference.title}
              </h2>

              <p className="mt-6 text-base leading-7 text-white/72">
                {reference.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {reference.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-white/62"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => toggleLightTable(reference)}
                >
                  {isReferenceInLightTable
                    ? "Quitar de Mesa de Luz"
                    : "Añadir a Mesa de Luz"}
                </Button>
              </div>
            </div>
          </>
        )}
      </Panel>
    </div>
  );
}
