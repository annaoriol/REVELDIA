import type { Scene } from "@/app/types";

export const methodScenes: Scene[] = [
  {
    id: "welcome",
    order: 0,
    title: "Bienvenida",
    eyebrow: "Entrada",
    description: "Acceso al laboratorio creativo.",
    status: "active",
  },
  {
    id: "intention",
    order: 1,
    title: "Intención",
    eyebrow: "Origen",
    description: "Define qué se quiere revelar y transmitir.",
    status: "available",
  },
  {
    id: "observation",
    order: 2,
    title: "Observación",
    eyebrow: "Descubrimiento",
    description: "Preguntas para comprender el proyecto.",
    status: "available",
  },
  {
    id: "references",
    order: 3,
    title: "Referencias",
    eyebrow: "Contexto",
    description: "Referentes visuales, narrativos y culturales.",
    status: "available",
  },
  {
    id: "light-table",
    order: 4,
    title: "Mesa de Luz",
    eyebrow: "Relaciones",
    description: "Espacio para ordenar ideas, hallazgos y conexiones.",
    status: "available",
  },
  {
    id: "creative-director",
    order: 5,
    title: "Director Creativo",
    eyebrow: "Criterio",
    description: "Coordina, relaciona y decide.",
    status: "locked",
  },
  {
    id: "specialists",
    order: 6,
    title: "Especialistas",
    eyebrow: "Análisis",
    description: "Agentes que analizan sin tomar decisiones.",
    status: "locked",
  },
  {
    id: "revelation",
    order: 7,
    title: "RƎVELACIÓN",
    eyebrow: "Identidad",
    description: "Descubrimiento central del proyecto.",
    status: "locked",
  },
  {
    id: "positivado",
    order: 8,
    title: "Positivado",
    eyebrow: "Sistema",
    description: "Transforma la revelación en conocimiento estructurado.",
    status: "locked",
  },
  {
    id: "system",
    order: 9,
    title: "Sistema",
    eyebrow: "Fuente de verdad",
    description: "Sistema Creativo reutilizable.",
    status: "locked",
  },
  {
    id: "creation",
    order: 10,
    title: "Creación",
    eyebrow: "Piezas",
    description: "Construcción de comunicación desde el Sistema Creativo.",
    status: "locked",
  },
  {
    id: "production",
    order: 11,
    title: "Producción",
    eyebrow: "Multimodal",
    description: "Coordinación de activos en distintos medios.",
    status: "locked",
  },
  {
    id: "adaptation",
    order: 12,
    title: "Adaptación",
    eyebrow: "Canales",
    description: "Transforma piezas manteniendo coherencia.",
    status: "locked",
  },
  {
    id: "export",
    order: 13,
    title: "Exportación",
    eyebrow: "Entrega",
    description: "Prepara los activos finales.",
    status: "locked",
  },
];

export function getSceneById(sceneId: Scene["id"]): Scene {
  return (
    methodScenes.find((scene) => scene.id === sceneId) ??
    methodScenes[0]
  );
}
