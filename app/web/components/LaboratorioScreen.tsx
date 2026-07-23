"use client";

import { useState } from "react";

import RevealGallery from "./RevealGallery";

import { useProject } from "@/context/ProjectContext";
import { selectRevealArea } from "@/core/ProjectUpdater";

type LaboratorioScreenProps = {
  onCompleteAction: () => void;
};

export default function LaboratorioScreen({
  onCompleteAction,
}: LaboratorioScreenProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const { project, replaceProject } = useProject();

  function handleSelect(id: string) {
    setSelected(id);

    const updatedProject = selectRevealArea(
      project,
      id
    );

    replaceProject(updatedProject);

    setTimeout(() => {
      onCompleteAction();
    }, 250);
  }

  return (
    <main className="min-h-screen w-screen overflow-x-hidden bg-black text-white">
      <div className="w-full px-20 py-12 2xl:px-28">
        <RevealGallery
          selected={selected}
          onSelect={handleSelect}
        />
      </div>
    </main>
  );
}