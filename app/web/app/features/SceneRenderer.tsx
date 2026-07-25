"use client";

import dynamic from "next/dynamic";

import EmptyState from "@/app/components/ui/EmptyState";
import { useRevealStore } from "@/app/stores/useRevealStore";
import type { SceneId } from "@/app/types";

const sceneComponents = {
  welcome: dynamic(() => import("./welcome/WelcomeScene"), {
    loading: () => (
      <EmptyState
        title="Cargando bienvenida"
        description="Preparando el laboratorio."
      />
    ),
  }),
  intention: dynamic(() => import("./intention/IntentionScene"), {
    loading: () => (
      <EmptyState
        title="Cargando intención"
        description="Preparando el origen del proyecto."
      />
    ),
  }),
  observation: dynamic(() => import("./observation/ObservationScene")),
  references: dynamic(() => import("./references/ReferencesScene")),
  "light-table": dynamic(
    () => import("./light-table/LightTableScene")
  ),
  planned: dynamic(() => import("./PlannedScene")),
};

const plannedSceneIds: SceneId[] = [
  "creative-director",
  "specialists",
  "revelation",
  "positivado",
  "system",
  "creation",
  "production",
  "adaptation",
  "export",
];

export default function SceneRenderer() {
  const activeSceneId = useRevealStore(
    (state) => state.scene.activeSceneId
  );

  if (plannedSceneIds.includes(activeSceneId)) {
    const Planned = sceneComponents.planned;

    return <Planned />;
  }

  switch (activeSceneId) {
    case "welcome": {
      const Welcome = sceneComponents.welcome;

      return <Welcome />;
    }
    case "intention": {
      const Intention = sceneComponents.intention;

      return <Intention />;
    }
    case "observation": {
      const Observation = sceneComponents.observation;

      return <Observation />;
    }
    case "references": {
      const References = sceneComponents.references;

      return <References />;
    }
    case "light-table": {
      const LightTable = sceneComponents["light-table"];

      return <LightTable />;
    }
    default: {
      const Planned = sceneComponents.planned;

      return <Planned />;
    }
  }
}
