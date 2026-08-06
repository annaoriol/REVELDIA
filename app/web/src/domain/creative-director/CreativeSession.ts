import type { Clarity } from "../clarity/Clarity";
import type { CreativeDNA } from "../creative-dna/CreativeDNA";
import type { Evidence } from "../evidence";
import type { Pattern } from "../patterns/Pattern";
import type { Revelation } from "../revelation/Revelation";

import type { CreativeGoal } from "./CreativeGoal";
import type { CreativeMemory } from "./CreativeMemory";
import type { CreativePlan } from "./CreativePlan.ts";
import type { CreativeQuestion } from "./CreativeQuestion";
import type { CreativeThought } from "./CreativeThought";

/**
 * Estado completo de una sesión de dirección creativa.
 *
 * El Director Creativo nunca almacena estado interno.
 * Todo el conocimiento pertenece a la sesión.
 */
export interface CreativeSession {
  /** Identificador de la sesión */
  id: string;

  /** Proyecto asociado */
  projectId: string;

  /** Fecha de creación */
  createdAt: Date;

  /** Última actualización */
  updatedAt: Date;

  /** Objetivo actual */
  goal: CreativeGoal;

  /** Plan creativo */
  plan: CreativePlan;

  /** Memoria de trabajo */
  memory: CreativeMemory;

  /** Preguntas abiertas */
  questions: CreativeQuestion[];

  /** Pensamientos generados */
  thoughts: CreativeThought[];

  /** Evidencias recopiladas */
  evidences: Evidence[];

  /** Patrones detectados */
  patterns: Pattern[];

  /** Claridad obtenida */
  clarity?: Clarity;

  /** ADN creativo */
  creativeDNA?: CreativeDNA;

  /** Revelación final */
  revelation?: Revelation;
}