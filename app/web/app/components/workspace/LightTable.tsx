"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import EmptyState from "@/app/components/ui/EmptyState";
import type { Reference } from "@/app/features/references/data";
import ReferenceDetail from "@/app/features/references/ReferenceDetail";
import { useRevealStore } from "@/app/stores/useRevealStore";

type Point = {
  x: number;
  y: number;
};

type Positions = Record<string, Point>;

const CARD_WIDTH = 190;
const CARD_HEIGHT = 120;
const CANVAS_PADDING = 24;

/*
 * La Mesa de Luz no es una cuadrícula.
 *
 * Es una superficie de trabajo donde las referencias
 * pueden convivir, superponerse y ser reorganizadas
 * libremente por la persona.
 *
 * Las nuevas referencias aparecen alrededor del centro
 * de la mesa, dentro de la zona visible.
 */
function getInitialPosition(
  reference: Reference,
  groupIndex: number,
  containerWidth: number
): Point {
  /*
   * La Mesa de Luz mantiene tres territorios visuales:
   *
   *   IZQUIERDA  → Director Creativo
   *   CENTRO     → RƎVELA
   *   DERECHA    → Tú aportas
   *
   * Cada territorio funciona como un pequeño pilón:
   * las referencias conviven y se solapan ligeramente,
   * pero el origen queda visualmente diferenciado.
   */

  const group =
    reference.origin === "provider"
      ? "director"
      : reference.origin === "user"
        ? "user"
        : "revela";

  const centerX =
    containerWidth / 2 -
    CARD_WIDTH / 2;

  const columnOffset =
    group === "director"
      ? -Math.min(containerWidth * 0.27, 300)
      : group === "user"
        ? Math.min(containerWidth * 0.27, 300)
        : 0;

  /*
   * Pequeña composición interna de cada pilón.
   * No son filas: son posiciones compactas que se
   * superponen ligeramente.
   */
  const pileOffsets: Point[] = [
    { x: 0, y: 0 },
    { x: 26, y: 18 },
    { x: -26, y: 18 },
    { x: 18, y: -20 },
    { x: -18, y: -20 },
    { x: 38, y: 34 },
    { x: -38, y: 34 },
    { x: 34, y: -36 },
    { x: -34, y: -36 },
  ];

  const offset =
    pileOffsets[groupIndex % pileOffsets.length];

  const cycle =
    Math.floor(
      groupIndex / pileOffsets.length
    );

  const cycleOffset =
    Math.min(cycle * 8, 32);

  const direction =
    cycle % 2 === 0 ? 1 : -1;

  const rawX =
    centerX +
    columnOffset +
    offset.x +
    cycleOffset * direction;

  const rawY =
    72 +
    offset.y +
    cycle * 8;

  return {
    x: Math.max(
      CANVAS_PADDING,
      Math.min(
        containerWidth -
          CARD_WIDTH -
          CANVAS_PADDING,
        rawX
      )
    ),

    y: Math.max(
      CANVAS_PADDING,
      rawY
    ),
  };
}

function ReferenceCanvasCard({
  reference,
  position,
  index,
  onMove,
  onRemove,
  onExamine,
}: {
  reference: Reference;
  position: Point;
  index: number;
  onMove: (id: string, point: Point) => void;
  onRemove: (id: string) => void;
  onExamine: (reference: Reference) => void;
}) {

  const draggingRef = useRef(false);
  const pointerOffsetRef = useRef<Point>({
    x: 0,
    y: 0,
  });

  const handlePointerDown = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (event.button !== 0) {
      return;
    }

    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    draggingRef.current = true;

    pointerOffsetRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    element.setPointerCapture(event.pointerId);

    event.preventDefault();
  };

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (!draggingRef.current) {
      return;
    }

    const canvas =
      event.currentTarget.parentElement;

    if (!canvas) {
      return;
    }

    const canvasRect =
      canvas.getBoundingClientRect();

    const nextX =
      event.clientX -
      canvasRect.left -
      pointerOffsetRef.current.x;

    const nextY =
      event.clientY -
      canvasRect.top -
      pointerOffsetRef.current.y;

    const maxX = Math.max(
      CANVAS_PADDING,
      canvasRect.width -
        CARD_WIDTH -
        CANVAS_PADDING
    );

    const maxY = Math.max(
      CANVAS_PADDING,
      canvasRect.height -
        CARD_HEIGHT -
        CANVAS_PADDING
    );

    onMove(reference.id, {
      x: Math.min(
        Math.max(CANVAS_PADDING, nextX),
        maxX
      ),
      y: Math.min(
        Math.max(CANVAS_PADDING, nextY),
        maxY
      ),
    });
  };

  const handlePointerUp = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (!draggingRef.current) {
      return;
    }

    draggingRef.current = false;

    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    }
  };

  const hasImage =
    typeof reference.image === "string" &&
    reference.image.trim().length > 0;

  const isDirector =
    reference.origin === "provider";

  const isUser =
    reference.origin === "user";

  const isRevelaSearch =
    reference.origin === "search";

  const originLabel =
    isDirector
      ? "✦ DIRECTOR"
      : isRevelaSearch
        ? "⌕ RƎVELA"
        : isUser
          ? "● APORTADA"
          : "";

  const cardOriginClass =
    isDirector
      ? "border-2 border-[#55C1D4]/80 bg-[#55C1D4]/[0.10]"
      : isRevelaSearch
        ? "border-2 border-[#55C1D4]/80 bg-transparent"
        : isUser
          ? "border border-white/[0.12] bg-transparent"
          : "border border-white/[0.12] bg-transparent";

  const originTextClass =
    isDirector || isRevelaSearch
      ? "text-[#55C1D4]"
      : "text-white/45";

  const footerClass =
    isDirector
      ? "border-[#55C1D4]/30 bg-black/[0.96]"
      : isRevelaSearch
        ? "border-[#55C1D4]/40 bg-black/[0.96]"
        : "border-white/[0.10] bg-black/[0.96]";

  return (
    <div
      className="absolute select-none touch-none"
      style={{
        left: position.x,
        top: position.y,
        width: CARD_WIDTH,
        zIndex: index + 1,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <Card
        
        style={
          isDirector
            ? {
                border: "2px solid rgba(85, 193, 212, 0.90)",
                backgroundColor: "rgba(85, 193, 212, 0.16)",
                boxShadow:
                  "0 0 0 1px rgba(85, 193, 212, 0.25), 0 0 18px rgba(85, 193, 212, 0.16)",
              }
            : isUser
              ? {
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }
              : undefined
        }
        className={`
          overflow-hidden
          rounded-xl
          border
          ${cardOriginClass}
          p-0
          shadow-[0_12px_35px_rgba(0,0,0,0.45)]
          transition-all
          duration-200
          hover:border-white/20
        `}
      >

        {/* VISTA COMPACTA */}
          <div className="relative">

            {hasImage ? (
              <img
                src={reference.image}
                alt={reference.title}
                draggable={false}
                className="
                  block
                  h-[72px]
                  w-full
                  object-cover
                  opacity-75
                "
              />
            ) : (
              <div
                className="
                  h-[72px]
                  w-full
                  bg-black
                "
              />
            )}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/45
                to-black/20
              "
            />

            <div className="absolute inset-x-3 top-2 flex items-center justify-between">
              <span
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-black/70
                  px-2
                  py-0.5
                  text-[8px]
                  tracking-[0.18em]
                  text-white/45
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={[
                  "text-[8px]",
                  "uppercase",
                  "tracking-[0.22em]",
                  originTextClass,
                ].join(" ")}
              >
                {originLabel || reference.category}
              </span>
            </div>

            <div className="absolute inset-x-3 bottom-2">
              <p className="truncate text-sm text-white/90">
                {reference.title}
              </p>
            </div>
          </div>


        {/* ACCIONES DE LA VISTA COMPACTA */}
          <div
            className={[
              "flex items-center justify-between border-t px-3 py-2",
              footerClass,
            ].join(" ")}
          >

            <span className="
              text-[8px]
              uppercase
              tracking-[0.16em]
              text-white/45
            ">
              Arrastra
            </span>

            <button
              type="button"
              onPointerDown={(event) => {
                event.stopPropagation();
              }}
              onClick={(event) => {
                event.stopPropagation();
                onExamine(reference);
              }}
              className="
                flex
                items-center
                gap-1
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-cyan-300/85
                transition
                hover:text-cyan-200
              "
            >
              <span>↗</span>
              Examinar
            </button>

            <button
              type="button"
              onPointerDown={(event) => {
                event.stopPropagation();
              }}
              onClick={(event) => {
                event.stopPropagation();
                onRemove(reference.id);
              }}
              className="
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-white/45
                transition
                hover:text-white/60
              "
            >
              Quitar
            </button>

          </div>


      </Card>
    </div>
  );
}

export default function LightTable() {
  const [selectedReference, setSelectedReference] =
    useState<Reference | null>(null);


  const lightTable =
    useRevealStore(
      (state) => state.lightTable
    );

  const projectId =
    useRevealStore(
      (state) => state.project.id
    );

  const removeFromLightTable =
    useRevealStore(
      (state) => state.removeFromLightTable
    );

  const setScene =
    useRevealStore(
      (state) => state.setScene
    );

  const canvasRef =
    useRef<HTMLDivElement | null>(null);

  const storageKey =
    `revela-light-table-positions-v4-${projectId}`;

  const [positions, setPositions] =
    useState<Positions>({});

  const [canvasWidth, setCanvasWidth] =
    useState(1100);

  useEffect(() => {
    try {
      const stored =
        window.localStorage.getItem(
          storageKey
        );

      if (!stored) {
        return;
      }

      const parsed =
        JSON.parse(stored) as Positions;

      if (
        parsed &&
        typeof parsed === "object"
      ) {
        setPositions(parsed);
      }
    } catch {
      // La Mesa de Luz puede continuar
      // aunque no exista memoria local válida.
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(positions)
      );
    } catch {
      // La posición sigue funcionando en memoria.
    }
  }, [positions, storageKey]);

  useEffect(() => {
    const element =
      canvasRef.current;

    if (!element) {
      return;
    }

    const updateSize = () => {
      setCanvasWidth(
        element.getBoundingClientRect().width
      );
    };

    updateSize();

    const observer =
      new ResizeObserver(updateSize);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const activePositions =
    useMemo(() => {
      const next: Positions = {
        ...positions,
      };

      lightTable.forEach(
        (reference, index) => {
          if (!next[reference.id]) {
            const groupIndex =
              lightTable
                .slice(0, index)
                .filter(
                  (item) =>
                    item.origin ===
                    reference.origin
                )
                .length;

            next[reference.id] =
              getInitialPosition(
                reference,
                groupIndex,
                canvasWidth
              );
          }
        }
      );

      return next;
    }, [
      positions,
      lightTable,
      canvasWidth,
    ]);

  const handleMove = (
    id: string,
    point: Point
  ) => {
    setPositions((current) => ({
      ...current,
      [id]: point,
    }));
  };

  const handleAddReferences = () => {
    setScene("references");
  };

  if (!lightTable.length) {
    return (
      <EmptyState
        title="La Mesa de Luz está vacía"
        description="Añade referencias desde Referencias para empezar a observar, comparar y relacionar."
        action={
          <Button
            onClick={handleAddReferences}
          >
            Añadir referencias
          </Button>
        }
      />
    );
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[1.45rem]
        border
        border-white/[0.08]
        bg-white/[0.012]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.055),transparent_58%)]
        "
      />

      <div className="relative p-[clamp(1.25rem,2.4vw,3rem)]">
        <div
          ref={canvasRef}
          className="
            relative
            mt-0
            min-h-[500px]
            overflow-hidden
            rounded-[1.25rem]
            border
            border-white/[0.07]
            bg-black/20
          "
        >
<div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-30
              [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
              [background-size:48px_48px]
            "
          />


          {lightTable.map(
            (reference, index) => (
              <ReferenceCanvasCard
                key={reference.id}
                reference={reference}
                index={index}
                position={
                  activePositions[
                    reference.id
                  ] ??
                  getInitialPosition(
                    reference,
                    lightTable
                      .slice(0, index)
                      .filter(
                        (item) =>
                          item.origin ===
                          reference.origin
                      )
                      .length,
                    canvasWidth
                  )
                }
                onMove={handleMove}
                onRemove={
                  removeFromLightTable
                }
            onExamine={(reference) =>
              setSelectedReference(reference)
            }
              />
            )
          )}

          
        </div>
      </div>
    
      
      <ReferenceDetail
        reference={selectedReference}
        open={selectedReference !== null}
        onClose={() => setSelectedReference(null)}
      />

</section>
  );
}
