import { Dossier as LegacyDossier } from "@/types/dossier";
import { Dossier as DomainDossier } from "@/src/domain/dossier/Dossier";

export function toDomainDossier(
  _dossier: LegacyDossier
): DomainDossier {
  throw new Error("Not implemented");
}

export function toLegacyDossier(
  _dossier: DomainDossier
): LegacyDossier {
  throw new Error("Not implemented");
}