export type ServiceStatus = "planned" | "available";

export interface ServiceRegistration {
  id: string;
  label: string;
  status: ServiceStatus;
}

export const serviceRegistry: ServiceRegistration[] = [
  {
    id: "ai",
    label: "IA",
    status: "planned",
  },
  {
    id: "memory",
    label: "Memoria",
    status: "planned",
  },
  {
    id: "export",
    label: "Exportación",
    status: "planned",
  },
];
