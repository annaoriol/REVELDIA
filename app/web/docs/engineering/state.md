# State Architecture

## Store

The global client store is `app/stores/useRevealStore.ts`.

It uses Zustand and contains the required state surfaces:

- `project`
- `scene`
- `navigation`
- `history`
- `memory`
- `selection`
- `preferences`
- `loading`
- `errors`
- `future`

## Initial State

`app/core/state/initial-state.ts` defines the initial laboratory state.

The initial scene is `welcome`. The first active project is local and draft-only.

## Navigation Actions

- `setScene(sceneId)`: changes the active scene, updates navigation and records history.
- `enterLaboratory()`: moves from `welcome` to `intention`.
- `setSelection(selection)`: records the selected scene, panel, asset or note.
- `clearSelection()`: clears contextual selection.
- `setLoading(key, value)`: updates loading surfaces.
- `pushError(message)`: records a UI-level error.
- `clearErrors()`: clears UI-level errors.

## Current Limits

The store does not implement persistence, AI calls, memory synchronization or export logic yet. Those areas are represented as stable state surfaces for future sprints.
