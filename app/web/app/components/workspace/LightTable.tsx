"use client";

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import EmptyState from "@/app/components/ui/EmptyState";
import type { Reference } from "@/app/features/references/data";
import { useRevealStore } from "@/app/stores/useRevealStore";

type SortableReferenceCardProps = {
  index: number;
  reference: Reference;
  onRemove: (id: string) => void;
};

function SortableReferenceCard({
  index,
  reference,
  onRemove,
}: SortableReferenceCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: reference.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${
        isDragging ? "relative z-10 opacity-80" : ""
      }`}
    >
      <Card
        className={`group overflow-hidden rounded-2xl border-white/10 bg-black/28 p-0 transition-colors duration-300 hover:border-cyan-300/35 ${
          isDragging ? "border-cyan-300/45" : ""
        }`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={reference.image}
            alt={reference.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/5" />

          <button
            type="button"
            className="absolute left-4 top-4 cursor-grab rounded-full border border-white/12 bg-black/45 px-3 py-1 backdrop-blur-sm transition-colors hover:border-cyan-300/35 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 active:cursor-grabbing"
            aria-label={`Reordenar ${reference.title}`}
            {...attributes}
            {...listeners}
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/55">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[10px] uppercase tracking-[0.34em] text-cyan-300/75">
              {reference.category}
            </p>

            <h3 className="mt-2 font-[var(--font-space)] text-3xl font-light leading-none tracking-[0.04em] text-white">
              {reference.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/68">
              {reference.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
          <div className="flex min-w-0 flex-wrap gap-2">
            {reference.keywords.slice(0, 2).map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/48"
              >
                {keyword}
              </span>
            ))}
          </div>

          <Button
            variant="quiet"
            className="shrink-0 px-0 text-xs"
            onClick={() => onRemove(reference.id)}
          >
            Eliminar
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default function LightTable() {
  const lightTable = useRevealStore((state) => state.lightTable);
  const removeFromLightTable = useRevealStore(
    (state) => state.removeFromLightTable
  );
  const moveLightTableReference = useRevealStore(
    (state) => state.moveLightTableReference
  );
  const clearLightTable = useRevealStore(
    (state) => state.clearLightTable
  );
  const setScene = useRevealStore((state) => state.setScene);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const lightTableIds = lightTable.map((reference) => reference.id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const fromIndex = lightTableIds.indexOf(String(active.id));
    const toIndex = lightTableIds.indexOf(String(over.id));

    moveLightTableReference(fromIndex, toIndex);
  };

  if (!lightTable.length) {
    return (
      <EmptyState
        title="La Mesa de Luz está vacía"
        description="Añade referencias desde el módulo Referencias para empezar a comparar ritmos, tonos y lenguajes visuales."
        action={
          <Button onClick={() => setScene("references")}>
            Ir a Referencias
          </Button>
        }
      />
    );
  }

  return (
    <section className="relative min-h-[min(74dvh,860px)] overflow-hidden rounded-[1.45rem] border border-white/[0.08] bg-white/[0.012] p-[clamp(1.25rem,2.4vw,3rem)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_58%)]" />

      <div className="relative flex flex-col gap-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.34em] text-white/35">
              Selección activa
            </p>

            <p className="mt-3 font-[var(--font-space)] text-[clamp(1.8rem,3vw,3.4rem)] font-light leading-none tracking-[0.06em] text-white">
              {lightTable.length}{" "}
              {lightTable.length === 1
                ? "referencia"
                : "referencias"}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="ghost"
              onClick={() => setScene("references")}
            >
              Volver a Referencias
            </Button>

            <Button variant="quiet" onClick={clearLightTable}>
              Vaciar Mesa de Luz
            </Button>
          </div>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={lightTableIds}
            strategy={rectSortingStrategy}
          >
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {lightTable.map((reference, index) => (
                <SortableReferenceCard
                  key={reference.id}
                  index={index}
                  reference={reference}
                  onRemove={removeFromLightTable}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </section>
  );
}
