# SPRINT 02 · LABORATORY

Versión: 1.0

---

# Objetivo

Construir el laboratorio donde trabajará el usuario.

No implementar todavía IA.

No implementar revelaciones.

Solo construir el espacio de trabajo.

---

# Resultado esperado

El usuario puede:

Crear un proyecto.

Abrir un proyecto.

Guardar un proyecto.

Crear sesiones.

Cambiar entre sesiones.

Visualizar el Workspace.

Visualizar el Inspector.

Mantener el estado.

---

# Entidades

Project

Session

Workspace

Laboratory

Preferences

---

# Casos de uso

CreateProject

OpenProject

DeleteProject

RenameProject

CreateSession

SelectSession

SaveProject

LoadProject

---

# Componentes

ProjectList

ProjectCard

SessionList

SessionCard

Workspace

Inspector

Toolbar

Breadcrumb

---

# Persistencia

Todos los proyectos se guardan mediante Storage.

Nunca directamente desde React.

---

# Estado

ProjectStore

SessionStore

NavigationStore

PreferencesStore

---

# Definition of Done

El usuario puede abrir RƎVELA y trabajar con proyectos persistentes.

No existe todavía IA.

No existen revelaciones.

Solo existe el laboratorio preparado.