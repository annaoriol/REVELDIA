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
  const lightTable = useRevealStore(
    (state) => state.lightTable
  );

  const toggleLightTable = useRevealStore(
    (state) => state.toggleLightTable
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  /*
   * La ampliadora necesita una referencia real.
   */
  if (!open || reference === null) {
    return null;
  }

  /*
   * A partir de aquí TypeScript conoce esta referencia
   * como Reference y no como Reference | null.
   *
   * Usamos esta constante también dentro de las funciones
   * internas para evitar que vuelva a aparecer el problema
   * de null.
   */
  const currentReference: Reference = reference;

  const isInLightTable = lightTable.some(
    (item) => item.id === currentReference.id
  );

  function handleToggleLightTable() {
    toggleLightTable(currentReference);

    /*
     * Después de añadir o quitar la referencia,
     * volvemos automáticamente a Referencias.
     */
    onClose();
  }

  return (
    <div
      aria-hidden={!open}
      className="
        fixed
        inset-0
        z-50
        flex
        justify-end
        bg-black/70
        backdrop-blur-sm
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <Panel
        aria-label={`Detalle de referencia ${currentReference.title}`}
        className="
          relative
          z-10
          mr-0
          mt-0
          flex
          h-full
          max-h-screen
          w-full
          max-w-[560px]
          flex-col
          overflow-hidden
          rounded-none
          border-l
          border-white/10
          bg-neutral-950
          text-white
          shadow-2xl
          sm:mr-4
          sm:mt-4
          sm:h-[calc(100vh-2rem)]
          sm:max-h-[calc(100vh-2rem)]
          sm:rounded-2xl
        "
      >
        {/* =================================================
            CABECERA
        ================================================= */}

        <div className="flex shrink-0 items-start justify-between border-b border-white/10 px-7 py-6">
          <div className="min-w-0 pr-6">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">
              {currentReference.category}
            </p>

            <h2 className="mt-3 text-4xl font-light leading-tight text-white">
              {currentReference.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ampliadora"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-xl
              text-white/50
              transition
              hover:border-white/30
              hover:text-white
            "
          >
            ×
          </button>
        </div>

        {/* =================================================
            CONTENIDO
        ================================================= */}

        <div className="flex-1 overflow-y-auto px-7 py-7">
          <p className="text-base leading-7 text-white/75">
            {currentReference.description}
          </p>

          {/* CLAVES DE INSPIRACIÓN */}

          <div className="mt-8">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
              Claves de inspiración
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {currentReference.keywords.map(
                (keyword) => (
                  <span
                    key={keyword}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-3
                      py-1.5
                      text-xs
                      text-white/60
                    "
                  >
                    {keyword}
                  </span>
                )
              )}
            </div>
          </div>

          {/* SEPARADOR */}

          <div className="my-8 h-px bg-white/10" />

          {/* INSPIRACIÓN */}

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">
              Inspiración
            </p>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Esta referencia forma parte del campo
              de inspiración que RƎVELA está
              explorando para descubrir patrones,
              estilos y posibilidades para el proyecto.
            </p>
          </div>
        </div>

        {/* =================================================
            ACCIÓN
        ================================================= */}

        <div className="shrink-0 border-t border-white/10 bg-neutral-950/95 px-6 py-5">
          <Button
            variant="primary"
            className="w-full"
            onClick={handleToggleLightTable}
          >
            {isInLightTable
              ? "Quitar de Mesa de Luz"
              : "Añadir a Mesa de Luz"}
          </Button>
        </div>
      </Panel>
    </div>
  );
}