# Folder Structure

## `app/`

Next.js App Router entry and canonical UI architecture.

## `app/components/`

Reusable interface components.

## `app/components/ui/`

Primitive design-system components inspired by shadcn/ui conventions.

## `app/components/layout/`

Permanent shell surfaces: header, sidebar composition, workspace slot and footer.

## `app/components/workspace/`

Central laboratory work surfaces.

## `app/components/navigation/`

Method navigation and navigation items.

## `app/components/panels/`

Inspector and future contextual panels.

## `app/features/`

Scene-level composition. Each feature represents a chapter of the method.

## `app/core/`

Application-level orchestration contracts for the App Router layer.

## `app/hooks/`

Reusable client hooks.

## `app/stores/`

Zustand state stores.

## `app/services/`

Integration service registry and future service boundaries.

## `app/types/`

Shared TypeScript contracts for the application shell.

## `app/styles/`

Design token exports used by TypeScript modules.

## `app/lib/`

Small framework-agnostic utilities.

## `app/assets/`

Stable asset references used by the application.

## `docs/`

Project documentation and architectural decisions.
