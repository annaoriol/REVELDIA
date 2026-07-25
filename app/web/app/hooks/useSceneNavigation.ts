"use client";

import { useMemo } from "react";

import { useRevealStore } from "@/app/stores/useRevealStore";

export function useSceneNavigation() {
  const activeSceneId = useRevealStore(
    (state) => state.scene.activeSceneId
  );
  const items = useRevealStore((state) => state.navigation.items);
  const setScene = useRevealStore((state) => state.setScene);

  return useMemo(
    () => ({
      activeSceneId,
      items,
      setScene,
    }),
    [activeSceneId, items, setScene]
  );
}
