"use client";

import { create } from "zustand";

import { getSceneById } from "@/app/core/orchestrator/method-scenes";
import { initialRevealState } from "@/app/core/state/initial-state";
import type {
  ProjectDNACreativeDirection,
  ProjectDNACreativeSystem,
  ProjectDNAIntention,
  ProjectDNAObservation,
  ProjectDNAPositivation,
  ProjectDNAReference,
  ProjectDNARevelation,
  RevealState,
  SceneId,
  Selection,
} from "@/app/types";

type RevealActions = {
  setScene: (sceneId: SceneId) => void;
  enterLaboratory: () => void;
  updateIntention: (
    intention: Omit<ProjectDNAIntention, "updatedAt">
  ) => void;
  registerObservation: (
    observation: Omit<ProjectDNAObservation, "id" | "createdAt">
  ) => void;
  registerReference: (
    reference: Omit<ProjectDNAReference, "id" | "createdAt">
  ) => void;
  updateCreativeDirection: (
    creativeDirection: Omit<ProjectDNACreativeDirection, "updatedAt">
  ) => void;
  revealIdentity: (
    revelation: Omit<ProjectDNARevelation, "createdAt">
  ) => void;
  positivateRevelation: (
    positivation: Omit<ProjectDNAPositivation, "updatedAt">
  ) => void;
  updateCreativeSystem: (
    creativeSystem: Omit<ProjectDNACreativeSystem, "updatedAt">
  ) => void;
  setSelection: (selection: Selection) => void;
  clearSelection: () => void;
  setLoading: (
    key: keyof RevealState["loading"],
    value: boolean
  ) => void;
  pushError: (message: string) => void;
  clearErrors: () => void;
};

type RevealStore = RevealState & RevealActions;

export const useRevealStore = create<RevealStore>((set, get) => ({
  ...initialRevealState,
  setScene: (sceneId) => {
    const nextScene = getSceneById(sceneId);

    set((state) => ({
      scene: {
        activeSceneId: nextScene.id,
        sceneTitle: nextScene.title,
        sceneDescription: nextScene.description,
      },
      navigation: {
        ...state.navigation,
        activeSceneId: nextScene.id,
        items: state.navigation.items.map((item) => ({
          ...item,
          status:
            item.id === nextScene.id
              ? "active"
              : item.status === "active"
                ? "available"
                : item.status,
        })),
      },
      history:
        state.history.at(-1) === sceneId
          ? state.history
          : [...state.history, sceneId],
      selection: {
        id: sceneId,
        type: "scene",
      },
    }));
  },
  enterLaboratory: () => {
    get().setScene("intention");
  },
  updateIntention: (intention) => {
    const now = new Date().toISOString();

    set((state) => ({
      project: {
        ...state.project,
        dna: {
          ...state.project.dna,
          intention: {
            ...intention,
            updatedAt: now,
          },
        },
        updatedAt: now,
      },
    }));
  },
  registerObservation: (observation) => {
    const now = new Date().toISOString();

    set((state) => ({
      project: {
        ...state.project,
        dna: {
          ...state.project.dna,
          observations: [
            ...state.project.dna.observations,
            {
              ...observation,
              id: crypto.randomUUID(),
              createdAt: now,
            },
          ],
        },
        updatedAt: now,
      },
    }));
  },
  registerReference: (reference) => {
    const now = new Date().toISOString();

    set((state) => ({
      project: {
        ...state.project,
        dna: {
          ...state.project.dna,
          references: [
            ...state.project.dna.references,
            {
              ...reference,
              id: crypto.randomUUID(),
              createdAt: now,
            },
          ],
        },
        updatedAt: now,
      },
    }));
  },
  updateCreativeDirection: (creativeDirection) => {
    const now = new Date().toISOString();

    set((state) => ({
      project: {
        ...state.project,
        dna: {
          ...state.project.dna,
          creativeDirection: {
            ...creativeDirection,
            updatedAt: now,
          },
        },
        updatedAt: now,
      },
    }));
  },
  revealIdentity: (revelation) => {
    const now = new Date().toISOString();

    set((state) => ({
      project: {
        ...state.project,
        dna: {
          ...state.project.dna,
          revelation: {
            ...revelation,
            createdAt: now,
          },
        },
        updatedAt: now,
      },
    }));
  },
  positivateRevelation: (positivation) => {
    const now = new Date().toISOString();

    set((state) => ({
      project: {
        ...state.project,
        dna: {
          ...state.project.dna,
          positivation: {
            ...positivation,
            updatedAt: now,
          },
        },
        updatedAt: now,
      },
    }));
  },
  updateCreativeSystem: (creativeSystem) => {
    const now = new Date().toISOString();

    set((state) => ({
      project: {
        ...state.project,
        dna: {
          ...state.project.dna,
          creativeSystem: {
            ...creativeSystem,
            updatedAt: now,
          },
        },
        updatedAt: now,
      },
    }));
  },
  setSelection: (selection) => {
    set({ selection });
  },
  clearSelection: () => {
    set({
      selection: {
        id: null,
        type: null,
      },
    });
  },
  setLoading: (key, value) => {
    set((state) => ({
      loading: {
        ...state.loading,
        [key]: value,
      },
    }));
  },
  pushError: (message) => {
    set((state) => ({
      errors: [
        ...state.errors,
        {
          id: crypto.randomUUID(),
          message,
        },
      ],
    }));
  },
  clearErrors: () => {
    set({ errors: [] });
  },
}));
