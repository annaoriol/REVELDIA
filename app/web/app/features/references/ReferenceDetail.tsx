"use client";

import { useEffect, useState } from "react";

import Panel from "@/app/components/ui/Panel";
import { useRevealStore } from "@/app/stores/useRevealStore";

import type { Reference } from "./data";
import type { ProjectDNAReference } from "@/app/types";

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
  const [mediaViewerOpen, setMediaViewerOpen] =
    useState(false);

  const lightTable = useRevealStore(
    (state) => state.lightTable
  );

  const projectReferences = useRevealStore(
    (state) => state.project.dna.references
  );

  const discoveredReferences = useRevealStore(
    (state) => state.discoveredReferences
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

  /*
   * La tarjeta utiliza una Reference ligera.
   *
   * Una referencia puede proceder de:
   *
   * 1. una aportación del usuario
   * 2. una referencia descubierta por el Provider
   *
   * Las referencias descubiertas conservan su
   * enriquecimiento directamente en Reference.
   */
  const projectReference: ProjectDNAReference | undefined =
    projectReferences.find(
      (item) => item.id === currentReference.id
    );

  const discoveredReference =
    discoveredReferences.find(
      (item) => item.id === currentReference.id
    );

  const isInLightTable = lightTable.some(
    (item) => item.id === currentReference.id
  );

  const isUserReference =
    projectReference !== undefined;

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
            {projectReference?.description ??
              discoveredReference?.description ??
              currentReference.description}
          </p>

          {(projectReference?.meaning ??
            discoveredReference?.meaning) && (
            <div className="mt-7">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                Significado
              </p>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {projectReference?.meaning ??
                  discoveredReference?.meaning}
              </p>
            </div>
          )}

          {(projectReference?.fileName ||
            projectReference?.mimeType) && (
            <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                Archivo
              </p>

              {projectReference.fileName && (
                <p className="mt-3 text-sm text-white/70">
                  {projectReference.fileName}
                </p>
              )}

              {projectReference.mimeType && (
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/30">
                  {projectReference.mimeType}
                </p>
              )}
            </div>
          )}

          {projectReference?.mediaUrl && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">
                    Referencia
                  </p>

                  <p className="mt-2 text-sm text-white/60">
                    Abre el material para verlo y validarlo.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setMediaViewerOpen(true)}
                  className="
                    shrink-0
                    rounded-xl
                    border
                    border-cyan-300/40
                    bg-cyan-300/[0.06]
                    px-5
                    py-3
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-cyan-300
                    transition
                    hover:border-cyan-300/70
                    hover:bg-cyan-300/[0.12]
                    hover:text-cyan-200
                  "
                >
                  Ver referencia →
                </button>
              </div>
            </div>
          )}

          {!projectReference?.mediaUrl &&
            projectReference?.image && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black">
                <img
                  src={projectReference.image}
                  alt={currentReference.title}
                  className="max-h-[520px] w-full object-contain"
                />
              </div>
            )}

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
              {isUserReference
                ? "Tu inspiración"
                : "Inspiración"}
            </p>

            <p className="mt-5 text-sm leading-7 text-white/60">
              {isUserReference
                ? "Esta referencia forma parte de tu campo de inspiración. La has aportado para que RƎVELA conozca mejor tu mirada, tus gustos y aquello que quieres incorporar al proyecto."
                : "Esta referencia forma parte del campo de inspiración que RƎVELA está explorando para descubrir patrones, estilos y posibilidades para el proyecto."}
            </p>
          </div>
        </div>


      </Panel>

      {mediaViewerOpen &&
        projectReference?.mediaUrl && (
          <div
            className="
              fixed
              inset-0
              z-[70]
              flex
              items-center
              justify-center
              bg-black/95
              p-4
              backdrop-blur-md
              sm:p-8
            "
            onMouseDown={(event) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                setMediaViewerOpen(false);
              }
            }}
          >
            <button
              type="button"
              onClick={() =>
                setMediaViewerOpen(false)
              }
              aria-label="Cerrar visor"
              className="
                absolute
                right-5
                top-5
                z-10
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-black/60
                text-xl
                text-white/60
                transition
                hover:border-white/35
                hover:text-white
              "
            >
              ×
            </button>

            <div className="flex h-full w-full items-center justify-center">
              {projectReference.mimeType?.startsWith(
                "video/"
              ) ? (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  src={projectReference.mediaUrl}
                  className="
                    max-h-full
                    max-w-full
                    rounded-xl
                    bg-black
                    object-contain
                    shadow-2xl
                  "
                />
              ) : projectReference.mimeType?.startsWith(
                  "image/"
                ) ? (
                <img
                  src={projectReference.mediaUrl}
                  alt={currentReference.title}
                  className="
                    max-h-full
                    max-w-full
                    rounded-xl
                    object-contain
                    shadow-2xl
                  "
                />
              ) : projectReference.mimeType ===
                "application/pdf" ? (
                <iframe
                  src={projectReference.mediaUrl}
                  title={currentReference.title}
                  className="
                    h-full
                    w-full
                    max-w-6xl
                    rounded-xl
                    border
                    border-white/10
                    bg-white
                  "
                />
              ) : (
                <a
                  href={projectReference.mediaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-xl
                    border
                    border-cyan-300/40
                    px-6
                    py-4
                    text-sm
                    text-cyan-300
                    hover:border-cyan-300/70
                  "
                >
                  Abrir referencia
                </a>
              )}
            </div>
          </div>
        )}
    </div>
  );
}