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
    dna: {
      identity: {
        whatToReveal: "",
        whatToTransmit: "",
        context: "",
        updatedAt: null,
      },
      references: [],
      lightTable: {
        referenceIds: [],
        groupIds: [],
        updatedAt: null,
      },
      relationships: [],
      observations: [],
      insights: [],
      sensoryLanguage: {
        terms: [],
        updatedAt: null,
      },
      sensoryDNA: null,
      creativeDirector: {
  criteria: [],
  decisions: [],
  decisionHistory: [],

  proposalNumber: 1,
  exploredReferenceIds: [],
  proposedReferenceIds: [],

  status: "exploring",
  decision: null,

  updatedAt: null,
},
      expressions: [],
      intention: {
        whatToReveal: "",
        whatToTransmit: "",
        context: "",
        updatedAt: null,
      },
      creativeDirection: {
        criteria: [],
        decisions: [],
        updatedAt: null,
      },
      specialistAnalyses: [],
      revelation: null,
      positivation: null,
      creativeSystem: null,
    },
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
  lightTable: [],
  lightTableGroups: [],
  relationships: [],
  connections: [],
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
