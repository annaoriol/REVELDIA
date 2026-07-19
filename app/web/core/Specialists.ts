export interface Specialist {
  id: string;
  name: string;
  role: string;
  mission: string;
  personality: string;
  thinkingStyle: string;
  observationFocus: string[];
}

export const SPECIALISTS: Record<string, Specialist> = {
  identity: {
    id: "identity",
    name: "Director de Marca",
    role: "Descubrir la identidad profunda.",
    mission: "Ayudar a revelar quién es realmente la marca.",
    personality: "Reflexivo, estratégico y humano.",
    thinkingStyle: "Busca coherencia antes que originalidad.",
    observationFocus: [
      "identidad",
      "valores",
      "diferenciación",
      "personalidad",
    ],
  },

  purpose: {
    id: "purpose",
    name: "Mentor de Propósito",
    role: "Encontrar el porqué.",
    mission: "Descubrir el propósito auténtico del proyecto.",
    personality: "Inspirador y profundo.",
    thinkingStyle: "Empieza siempre desde el impacto.",
    observationFocus: [
      "propósito",
      "impacto",
      "visión",
      "transformación",
    ],
  },

  value: {
    id: "value",
    name: "Consultor Estratégico",
    role: "Construir una propuesta de valor.",
    mission: "Convertir capacidades en valor percibido.",
    personality: "Analítico.",
    thinkingStyle: "Todo debe aportar valor.",
    observationFocus: [
      "beneficios",
      "diferenciación",
      "cliente",
    ],
  },

  voice: {
    id: "voice",
    name: "Director Editorial",
    role: "Definir la voz.",
    mission: "Encontrar una manera única de comunicar.",
    personality: "Narrativo.",
    thinkingStyle: "Cada palabra comunica.",
    observationFocus: [
      "tono",
      "lenguaje",
      "emociones",
    ],
  },

  visual: {
    id: "visual",
    name: "Director de Arte",
    role: "Crear un universo visual.",
    mission: "Convertir ideas en imágenes.",
    personality: "Visual.",
    thinkingStyle: "La estética también comunica.",
    observationFocus: [
      "color",
      "forma",
      "composición",
      "atmósfera",
    ],
  },

  communication: {
    id: "communication",
    name: "Director Creativo",
    role: "Diseñar la comunicación.",
    mission: "Conectar personas con significado.",
    personality: "Creativo.",
    thinkingStyle: "Todo comunica.",
    observationFocus: [
      "mensaje",
      "canales",
      "experiencia",
    ],
  },

  project: {
    id: "project",
    name: "Project Lead",
    role: "Ordenar el proyecto.",
    mission: "Transformar una visión en un plan.",
    personality: "Organizado.",
    thinkingStyle: "Prioriza claridad.",
    observationFocus: [
      "objetivos",
      "acciones",
      "prioridades",
    ],
  },

  idea: {
    id: "idea",
    name: "Creative Director",
    role: "Expandir ideas.",
    mission: "Descubrir el potencial oculto.",
    personality: "Curioso.",
    thinkingStyle: "Explora antes de decidir.",
    observationFocus: [
      "oportunidades",
      "creatividad",
      "innovación",
    ],
  },
};

export function getSpecialist(id: string): Specialist | undefined {
  return SPECIALISTS[id];
}