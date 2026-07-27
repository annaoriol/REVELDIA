# Refactor Changelog

## 2026-07-26 · Sprint 01 · Project DNA foundation

Decision:

- The Project DNA lives inside the active `Project` contract in `app/types/revela.ts`.
- The initial empty DNA is created in `app/core/state/initial-state.ts`.
- No new folders, stores, providers or runtime flows were introduced.

Reason:

- `app/stores/useRevealStore.ts` is the active global state surface for the current AppShell.
- `RevealState.project` is already the operational project source for the current MVP shell.
- Keeping DNA inside `Project` avoids a parallel architecture and preserves scene navigation.

Compatibility:

- Existing UI fields `project.name` and `project.status` remain unchanged.
- Navigation and scene rendering remain untouched.
- Legacy `context/ProjectContext.tsx`, root `types/project.ts` and `domain/project/Project.ts` are not modified in this phase.

## 2026-07-26 · Sprint 02 · Laboratory DNA actions

Decision:

- Laboratory scenes write to Project DNA through explicit method actions in `app/stores/useRevealStore.ts`.
- The first connected scene is Intention, using `updateIntention()`.
- Additional DNA actions are defined for Observation, References, Creative Direction, Revelation, Positivation and Creative System without changing the UI.

Reason:

- The store is the active state boundary for the AppShell laboratory.
- Explicit actions keep the language aligned with the RƎVELA method and avoid generic project mutation.
- Keeping the actions in the existing store preserves compatibility with current navigation and scene rendering.

Compatibility:

- No interface markup, navigation configuration or legacy code was changed.
- Existing project fields remain stable.
- Reserved scenes can adopt the explicit actions when their real inputs are implemented.

## 2026-07-26 · Sprint 04 · Observation scene writes to DNA

Decision:

- `app/features/observation/ObservationScene.tsx` records observations through the existing `registerObservation()` domain action.
- Observations are stored in `project.dna.observations`.
- Each observation keeps a question, answer, generated id, creation date and an empty evidence link surface.

Reason:

- Observation is part of the Laboratory and must modify the Project DNA directly through explicit method language.
- The scene now captures discovery signals without producing creative decisions.
- `evidenceIds` prepares the structure for references and evidence relationships without adding persistence or new architecture.

Compatibility:

- AppShell, navigation and scene routing remain unchanged.
- No legacy code was removed or migrated.
- Persistence remains out of scope.
