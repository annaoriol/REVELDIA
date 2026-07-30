"use client";

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
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
import { useMemo, useState, type ReactNode } from "react";

import Input from "@/app/components/forms/Input";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import EmptyState from "@/app/components/ui/EmptyState";
import type { Reference } from "@/app/features/references/data";
import { useRevealStore } from "@/app/stores/useRevealStore";
import type { Group } from "@/app/types";

const UNGROUPED_CONTAINER_ID = "light-table:ungrouped";
const GROUP_CONTAINER_PREFIX = "light-table:group:";

function getGroupContainerId(groupId: string) {
  return `${GROUP_CONTAINER_PREFIX}${groupId}`;
}

type SortableReferenceCardProps = {
  index: number;
  reference: Reference;
  currentGroupId: string | null;
  groups: Group[];
  onGroupChange: (itemId: string, groupId: string | null) => void;
  onRemove: (id: string) => void;
};

function SortableReferenceCard({
  index,
  reference,
  currentGroupId,
  groups,
  onGroupChange,
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
  transform: `${CSS.Transform.toString(transform)} rotate(${(index % 5) - 2}deg)`,
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
  className={`group border-0 bg-transparent p-0 shadow-none transition-all duration-300 ${
    isDragging
      ? "scale-105"
      : "hover:-translate-y-1"
  }`}
>
        <div className="relative overflow-hidden rounded-sm bg-transparent">
          <img
  src={reference.image}
  alt={reference.title}
  className="block h-auto w-[320px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
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

      
        </div>

        <div className="flex items-center justifxy-between gap-4 border-t border-white/10 px-5 py-4">
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

          <div className="flex shrink-0 items-center gap-3">
            <label className="sr-only" htmlFor={`group-${reference.id}`}>
              Grupo de {reference.title}
            </label>

            <select
              id={`group-${reference.id}`}
              className="max-w-[9rem] rounded-full border border-white/10 bg-black/35 px-3 py-2 text-xs text-white/64 outline-none transition-colors focus:border-cyan-300/50"
              value={currentGroupId ?? ""}
              onChange={(event) =>
                onGroupChange(reference.id, event.target.value || null)
              }
            >
              <option value="">Sin grupo</option>
              {groups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>

            <Button
              variant="quiet"
              className="px-0 text-xs"
              onClick={() => onRemove(reference.id)}
            >
              Eliminar
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

type ReferenceGroupSectionProps = {
  id: string;
  title: string;
  references: Reference[];
  groups: Group[];
  itemGroupIds: Map<string, string>;
  onGroupChange: (itemId: string, groupId: string | null) => void;
  onRemove: (id: string) => void;
  children?: ReactNode;
};

function ReferenceGroupSection({
  id,
  title,
  references,
  groups,
  itemGroupIds,
  onGroupChange,
  onRemove,
  children,
}: ReferenceGroupSectionProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <section
  ref={setNodeRef}
  className={`relative py-4 transition-colors ${
    isOver ? "ring-2 ring-cyan-300/40 rounded-xl" : ""
  }`}
>

      <SortableContext
        items={references.map((reference) => reference.id)}
        strategy={rectSortingStrategy}
      >
        {references.length ? (
  <div className="relative min-h-[700px]">
    {references.map((reference, index) => (
      <div
        key={reference.id}
        className="absolute"
        style={{
          left: `${80 + index * 140}px`,
          top: `${90 + index * 45}px`,
          transform: `rotate(${(index % 5) - 2}deg)`,
          zIndex: index,
        }}
      >
        <SortableReferenceCard
          index={index}
          reference={reference}
          currentGroupId={itemGroupIds.get(reference.id) ?? null}
          groups={groups}
          onGroupChange={onGroupChange}
          onRemove={onRemove}
        />
      </div>
    ))}
  </div>
) : (
  <div className="px-4 py-10 text-center text-sm italic text-white/45">
    Arrastra referencias aquí.
  </div>
)}
      </SortableContext>
    </section>
  );
}

export default function LightTable() {
  const lightTable = useRevealStore((state) => state.lightTable);
  const lightTableGroups = useRevealStore(
    (state) => state.lightTableGroups
  );
  const removeFromLightTable = useRevealStore(
    (state) => state.removeFromLightTable
  );
  const moveLightTableReference = useRevealStore(
    (state) => state.moveLightTableReference
  );
  const clearLightTable = useRevealStore(
    (state) => state.clearLightTable
  );
  const createGroup = useRevealStore((state) => state.createGroup);
  const renameGroup = useRevealStore((state) => state.renameGroup);
  const deleteGroup = useRevealStore((state) => state.deleteGroup);
  const addItemToGroup = useRevealStore(
    (state) => state.addItemToGroup
  );
  const removeItemFromGroup = useRevealStore(
    (state) => state.removeItemFromGroup
  );
  const moveItemBetweenGroups = useRevealStore(
    (state) => state.moveItemBetweenGroups
  );
  const setScene = useRevealStore((state) => state.setScene);
  const [newGroupName, setNewGroupName] = useState("");
  const [groupNames, setGroupNames] = useState<Record<string, string>>(
    {}
  );
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const lightTableIds = lightTable.map((reference) => reference.id);
  const itemGroupIds = useMemo(() => {
    const groupIds = new Map<string, string>();

    for (const group of lightTableGroups) {
      for (const itemId of group.itemIds) {
        groupIds.set(itemId, group.id);
      }
    }

    return groupIds;
  }, [lightTableGroups]);
  const ungroupedReferences = lightTable.filter(
    (reference) => !itemGroupIds.has(reference.id)
  );
  const referencesByGroup = useMemo(() => {
    const groupedReferences = new Map<string, Reference[]>();

    for (const group of lightTableGroups) {
      const itemIds = new Set(group.itemIds);

      groupedReferences.set(
        group.id,
        lightTable.filter((reference) => itemIds.has(reference.id))
      );
    }

    return groupedReferences;
  }, [lightTable, lightTableGroups]);

  const getGroupIdFromContainer = (id: string) => {
    if (id === UNGROUPED_CONTAINER_ID) {
      return null;
    }

    if (id.startsWith(GROUP_CONTAINER_PREFIX)) {
      return id.slice(GROUP_CONTAINER_PREFIX.length);
    }

    return itemGroupIds.get(id) ?? null;
  };

  const moveItemToGroup = (
    itemId: string,
    targetGroupId: string | null
  ) => {
    const sourceGroupId = itemGroupIds.get(itemId) ?? null;

    if (sourceGroupId === targetGroupId) {
      return;
    }

    if (!targetGroupId) {
      removeItemFromGroup(itemId);
      return;
    }

    if (!sourceGroupId) {
      addItemToGroup(itemId, targetGroupId);
      return;
    }

    moveItemBetweenGroups(itemId, sourceGroupId, targetGroupId);
  };

  const handleCreateGroup = () => {
    createGroup(newGroupName);
    setNewGroupName("");
  };

  const handleRenameGroup = (groupId: string, fallbackName: string) => {
    renameGroup(groupId, groupNames[groupId] ?? fallbackName);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const activeId = String(active.id);
    const overId = String(over.id);
    const targetGroupId = getGroupIdFromContainer(overId);
    const fromIndex = lightTableIds.indexOf(activeId);
    const toIndex = lightTableIds.indexOf(overId);

    if (fromIndex >= 0 && toIndex >= 0) {
      moveLightTableReference(fromIndex, toIndex);
    }

    moveItemToGroup(activeId, targetGroupId);
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
            <form
              className="flex min-w-[min(100%,22rem)] flex-1 gap-2 sm:flex-initial"
              onSubmit={(event) => {
                event.preventDefault();
                handleCreateGroup();
              }}
            >
              <Input
                value={newGroupName}
                onChange={(event) => setNewGroupName(event.target.value)}
                placeholder="Nuevo grupo"
                aria-label="Nombre del nuevo grupo"
              />

              <Button
                type="submit"
                variant="ghost"
                className="shrink-0"
              >
                Crear grupo
              </Button>
            </form>

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
          <div className="space-y-5">
            <ReferenceGroupSection
              id={UNGROUPED_CONTAINER_ID}
              title="Sin grupo"
              references={ungroupedReferences}
              groups={lightTableGroups}
              itemGroupIds={itemGroupIds}
              onGroupChange={moveItemToGroup}
              onRemove={removeFromLightTable}
            />

            {lightTableGroups.map((group) => (
              <ReferenceGroupSection
                key={group.id}
                id={getGroupContainerId(group.id)}
                title={group.name}
                references={referencesByGroup.get(group.id) ?? []}
                groups={lightTableGroups}
                itemGroupIds={itemGroupIds}
                onGroupChange={moveItemToGroup}
                onRemove={removeFromLightTable}
              >
                <form
                  className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[20rem] sm:flex-row"
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleRenameGroup(group.id, group.name);
                  }}
                >
                  <Input
                    value={groupNames[group.id] ?? group.name}
                    onChange={(event) =>
                      setGroupNames((currentNames) => ({
                        ...currentNames,
                        [group.id]: event.target.value,
                      }))
                    }
                    aria-label={`Renombrar ${group.name}`}
                  />

                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      variant="ghost"
                      className="shrink-0"
                    >
                      Renombrar
                    </Button>

                    <Button
                      variant="quiet"
                      className="shrink-0"
                      onClick={() => deleteGroup(group.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </form>
              </ReferenceGroupSection>
            ))}
          </div>
        </DndContext>
      </div>
    </section>
  );
}
