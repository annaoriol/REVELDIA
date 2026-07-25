import type { RevealState } from "@/app/types";
import { futureFeatures } from "@/app/core/orchestrator/future-features";
import { getSceneById, methodScenes } from "@/app/core/orchestrator/method-scenes";

const now = new Date().toISOString();
const initialScene = getSceneById("welcome");

export const initialRevealState: RevealState = {
  project: {
    id: "revela-local-project",
    name: "Proyecto RƎVELA",
    status: "draft",
    createdAt: now,
    updatedAt: now,
  },
  scene: {
    activeSceneId: initialScene.id,
    sceneTitle: initialScene.title,
    sceneDescription: initialScene.description,
  },
  navigation: {
    items: methodScenes,
    activeSceneId: initialScene.id,
  },
  history: [initialScene.id],
  memory: {
    entries: [],
    lastSyncedAt: null,
  },
  selection: {
    id: null,
    type: null,
  },
  preferences: {
    theme: "dark",
    reducedMotion: false,
    density: "comfortable",
  },
  loading: {
    scene: false,
    memory: false,
    export: false,
  },
  errors: [],
  future: futureFeatures,
};
