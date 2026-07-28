"use client";

import { create } from "zustand";

import { getSceneById } from "@/app/core/orchestrator/method-scenes";
import { initialRevealState } from "@/app/core/state/initial-state";
import type { Reference } from "@/app/features/references/data";
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
  addToLightTable: (reference: Reference) => void;
  removeFromLightTable: (id: string) => void;
  toggleLightTable: (reference: Reference) => void;
  moveLightTableReference: (fromIndex: number, toIndex: number) => void;
  reorderLightTable: (ids: string[]) => void;
  createGroup: (name: string) => void;
  renameGroup: (groupId: string, name: string) => void;
  deleteGroup: (groupId: string) => void;
  addItemToGroup: (itemId: string, groupId: string) => void;
  removeItemFromGroup: (itemId: string) => void;
  moveItemBetweenGroups: (
    itemId: string,
    fromGroupId: string | null,
    toGroupId: string | null
  ) => void;
  clearLightTable: () => void;
  isInLightTable: (id: string) => boolean;
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

function orderGroupsByLightTable(
  groups: RevealState["lightTableGroups"],
  lightTable: Reference[]
) {
  const orderById = new Map(
    lightTable.map((reference, index) => [reference.id, index])
  );

  return groups.map((group) => ({
    ...group,
    itemIds: [...group.itemIds].sort(
      (firstId, secondId) =>
        (orderById.get(firstId) ?? Number.MAX_SAFE_INTEGER) -
        (orderById.get(secondId) ?? Number.MAX_SAFE_INTEGER)
    ),
  }));
}

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

  get().setScene("observation");
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
    
    get().setScene("references");
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
  addToLightTable: (reference) => {
    const now = new Date().toISOString();

    set((state) => {
      if (state.lightTable.some((item) => item.id === reference.id)) {
        return state;
      }

      return {
        lightTable: [...state.lightTable, reference],
        project: {
          ...state.project,
          updatedAt: now,
        },
      };
    });
  },
  removeFromLightTable: (id) => {
    const now = new Date().toISOString();

    set((state) => {
      const nextLightTable = state.lightTable.filter(
        (reference) => reference.id !== id
      );

      if (nextLightTable.length === state.lightTable.length) {
        return state;
      }

      return {
        lightTable: nextLightTable,
        lightTableGroups: state.lightTableGroups.map((group) => ({
          ...group,
          itemIds: group.itemIds.filter((itemId) => itemId !== id),
        })),
        project: {
          ...state.project,
          updatedAt: now,
        },
      };
    });
  },
  toggleLightTable: (reference) => {
    if (get().isInLightTable(reference.id)) {
      get().removeFromLightTable(reference.id);
      return;
    }

    get().addToLightTable(reference);
  },
  moveLightTableReference: (fromIndex, toIndex) => {
    const now = new Date().toISOString();

    set((state) => {
      const lastIndex = state.lightTable.length - 1;

      if (
        fromIndex === toIndex ||
        fromIndex < 0 ||
        toIndex < 0 ||
        fromIndex > lastIndex ||
        toIndex > lastIndex
      ) {
        return state;
      }

      const nextLightTable = [...state.lightTable];
      const [movedReference] = nextLightTable.splice(fromIndex, 1);

      if (!movedReference) {
        return state;
      }

      nextLightTable.splice(toIndex, 0, movedReference);

      return {
        lightTable: nextLightTable,
        lightTableGroups: orderGroupsByLightTable(
          state.lightTableGroups,
          nextLightTable
        ),
        project: {
          ...state.project,
          updatedAt: now,
        },
      };
    });
  },
  reorderLightTable: (ids) => {
    const now = new Date().toISOString();

    set((state) => {
      if (ids.length !== state.lightTable.length) {
        return state;
      }

      const referencesById = new Map(
        state.lightTable.map((reference) => [reference.id, reference])
      );

      const nextLightTable: Reference[] = [];

      for (const id of ids) {
        const reference = referencesById.get(id);

        if (!reference) {
          return state;
        }

        nextLightTable.push(reference);
      }

      const hasSameOrder = state.lightTable.every(
        (reference, index) => reference.id === ids[index]
      );

      if (hasSameOrder) {
        return state;
      }

      return {
        lightTable: nextLightTable,
        lightTableGroups: orderGroupsByLightTable(
          state.lightTableGroups,
          nextLightTable
        ),
        project: {
          ...state.project,
          updatedAt: now,
        },
      };
    });
  },
  createGroup: (name) => {
  const now = new Date().toISOString();
  const trimmedName = name.trim();

  if (!trimmedName) {
    return;
  }

  set((state) => ({
    lightTableGroups: [
      ...state.lightTableGroups,
      {
        id: crypto.randomUUID(),
        name: trimmedName,
        itemIds: [],
        color: undefined,
        collapsed: false,
      },
    ],
    project: {
      ...state.project,
      updatedAt: now,
    },
  }));
},

  renameGroup: (groupId, name) => {
    const now = new Date().toISOString();
    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    set((state) => {
      const nextGroups = state.lightTableGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              name: trimmedName,
            }
          : group
      );

      if (
        nextGroups.every(
          (group, index) => group === state.lightTableGroups[index]
        )
      ) {
        return state;
      }

      return {
        lightTableGroups: nextGroups,
        project: {
          ...state.project,
          updatedAt: now,
        },
      };
    });
  },
  deleteGroup: (groupId) => {
    const now = new Date().toISOString();

    set((state) => {
      const nextGroups = state.lightTableGroups.filter(
        (group) => group.id !== groupId
      );

      if (nextGroups.length === state.lightTableGroups.length) {
        return state;
      }

      return {
        lightTableGroups: nextGroups,
        project: {
          ...state.project,
          updatedAt: now,
        },
      };
    });
  },
  addItemToGroup: (itemId, groupId) => {
    const now = new Date().toISOString();

    set((state) => {
      if (!state.lightTableGroups.some((group) => group.id === groupId)) {
        return state;
      }

      if (!state.lightTable.some((reference) => reference.id === itemId)) {
        return state;
      }

      let didChange = false;
      const nextGroups = state.lightTableGroups.map((group) => {
        const itemIdsWithoutItem = group.itemIds.filter((id) => id !== itemId);

        if (group.id !== groupId) {
          if (itemIdsWithoutItem.length !== group.itemIds.length) {
            didChange = true;
            return {
              ...group,
              itemIds: itemIdsWithoutItem,
            };
          }

          return group;
        }

        if (group.itemIds.includes(itemId)) {
          return group;
        }

        didChange = true;

        return {
          ...group,
          itemIds: [...itemIdsWithoutItem, itemId],
        };
      });

      if (!didChange) {
        return state;
      }

      return {
        lightTableGroups: orderGroupsByLightTable(
          nextGroups,
          state.lightTable
        ),
        project: {
          ...state.project,
          updatedAt: now,
        },
      };
    });
  },
  removeItemFromGroup: (itemId) => {
    const now = new Date().toISOString();

    set((state) => {
      let didChange = false;
      const nextGroups = state.lightTableGroups.map((group) => {
        const nextItemIds = group.itemIds.filter((id) => id !== itemId);

        if (nextItemIds.length === group.itemIds.length) {
          return group;
        }

        didChange = true;

        return {
          ...group,
          itemIds: nextItemIds,
        };
      });

      if (!didChange) {
        return state;
      }

      return {
        lightTableGroups: nextGroups,
        project: {
          ...state.project,
          updatedAt: now,
        },
      };
    });
  },
  moveItemBetweenGroups: (itemId, fromGroupId, toGroupId) => {
    if (fromGroupId === toGroupId) {
      return;
    }

    if (!toGroupId) {
      get().removeItemFromGroup(itemId);
      return;
    }

    get().addItemToGroup(itemId, toGroupId);
  },
  clearLightTable: () => {
    const now = new Date().toISOString();

    set((state) => {
      if (!state.lightTable.length) {
        return state;
      }

      return {
        lightTable: [],
        lightTableGroups: state.lightTableGroups.map((group) => ({
          ...group,
          itemIds: [],
        })),
        project: {
          ...state.project,
          updatedAt: now,
        },
      };
    });
  },
  isInLightTable: (id) => {
    return get().lightTable.some((reference) => reference.id === id);
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
