import type { Scene } from "@/app/types";

export const methodScenes: Scene[] = [
  {
    id: "welcome",
    order: 0,
    title: "Bienvenida",
    eyebrow: "Laboratorio",
    description: "Acceso al laboratorio creativo.",
    status: "active",
  },
  {
    id: "creative-director",
    order: 1,
    title: "Director Creativo",
    eyebrow: "Guía",
    description:
      "Comprende el punto de partida y conduce el proceso creativo.",
    status: "available",
  },
  {
    id: "references",
    order: 2,
    title: "Referencias",
    eyebrow: "Inspiración",
    description:
      "Explora y selecciona las referencias que inspirarán tu proyecto.",
    status: "available",
  },
  {
    id: "light-table",
    order: 3,
    title: "Mesa de Luz",
    eyebrow: "Relaciones",
    description:
      "Organiza y relaciona las referencias seleccionadas.",
    status: "available",
  },
  {
    id: "revelation",
    order: 4,
    title: "RƎVELACIÓN",
    eyebrow: "Esencia",
    description:
      "El Director Creativo sintetiza las referencias y revela la esencia del proyecto.",
    status: "locked",
  },

  // ===== FASE II =====

  {
    id: "positivado",
    order: 5,
    title: "Positivado",
    eyebrow: "Sistema",
    description:
      "Transforma la revelación en conocimiento estructurado.",
    status: "locked",
  },
  {
    id: "system",
    order: 6,
    title: "Sistema Creativo",
    eyebrow: "Fuente de verdad",
    description:
      "Construye un sistema reutilizable.",
    status: "locked",
  },
  {
    id: "creation",
    order: 7,
    title: "Creación",
    eyebrow: "Contenido",
    description:
      "Genera piezas desde el Sistema Creativo.",
    status: "locked",
  },
  {
    id: "production",
    order: 8,
    title: "Producción",
    eyebrow: "Multimodal",
    description:
      "Produce activos para distintos medios.",
    status: "locked",
  },
  {
    id: "adaptation",
    order: 9,
    title: "Adaptación",
    eyebrow: "Canales",
    description:
      "Adapta el contenido manteniendo coherencia.",
    status: "locked",
  },
  {
    id: "export",
    order: 10,
    title: "Exportación",
    eyebrow: "Entrega",
    description:
      "Prepara los entregables finales.",
    status: "locked",
  },
];

export function getSceneById(sceneId: Scene["id"]): Scene {
  return (
    methodScenes.find((scene) => scene.id === sceneId) ??
    methodScenes[0]
  );
}