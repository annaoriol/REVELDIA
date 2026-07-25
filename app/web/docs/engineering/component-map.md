# Component Map

## Layout

- `app/components/layout/AppShell.tsx`: permanent application shell.
- `app/components/layout/Header.tsx`: logo, project identity, status and primary actions.
- `app/components/layout/Footer.tsx`: minimal status surface.
- `app/components/layout/TopBar.tsx`: compatibility export to `Header`.
- `app/components/layout/StatusBar.tsx`: compatibility export to `Footer`.

## Navigation

- `app/components/navigation/Sidebar.tsx`: method navigation.
- `app/components/navigation/NavigationItem.tsx`: single accessible scene navigation item.

## Workspace

- `app/components/workspace/Workspace.tsx`: central scene host with dynamic scene rendering.
- `app/components/workspace/LightTable.tsx`: editorial light-table surface and placeholder cards.

## Panels

- `app/components/panels/Inspector.tsx`: contextual right panel prepared for properties, state, help and actions.

## UI

- `app/components/ui/Button.tsx`
- `app/components/ui/IconButton.tsx`
- `app/components/ui/Card.tsx`
- `app/components/ui/Panel.tsx`
- `app/components/ui/Toolbar.tsx`
- `app/components/ui/SectionTitle.tsx`
- `app/components/ui/EmptyState.tsx`
- `app/components/ui/ProjectBadge.tsx`

## Features

- `app/features/SceneRenderer.tsx`: dynamic scene loader.
- `app/features/welcome/WelcomeScene.tsx`: laboratory entry.
- `app/features/intention/IntentionScene.tsx`: first intention input.
- `app/features/observation/ObservationScene.tsx`: observation structure.
- `app/features/references/ReferencesScene.tsx`: reference collection structure.
- `app/features/light-table/LightTableScene.tsx`: light-table chapter.
- `app/features/PlannedScene.tsx`: reserved chapter surface.
