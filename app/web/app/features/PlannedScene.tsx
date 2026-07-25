"use client";

import EmptyState from "@/app/components/ui/EmptyState";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { useRevealStore } from "@/app/stores/useRevealStore";

export default function PlannedScene() {
  const scene = useRevealStore((state) =>
    state.navigation.items.find(
      (item) => item.id === state.scene.activeSceneId
    )
  );

  return (
    <section className="mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center py-[clamp(2rem,5vw,6rem)]">
      <SectionTitle
        eyebrow={scene?.eyebrow ?? "Capítulo"}
        title={scene?.title ?? "Escena preparada"}
        description={scene?.description}
      />

      <div className="mt-10">
        <EmptyState
          title="Capítulo reservado"
          description="La estructura está preparada para crecer sin mezclar responsabilidades del método."
        />
      </div>
    </section>
  );
}
