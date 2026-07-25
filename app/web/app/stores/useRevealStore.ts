"use client";

import { create } from "zustand";

import { getSceneById } from "@/app/core/orchestrator/method-scenes";
import { initialRevealState } from "@/app/core/state/initial-state";
import type { RevealState, SceneId, Selection } from "@/app/types";

type RevealActions = {
  setScene: (sceneId: SceneId) => void;
  enterLaboratory: () => void;
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
