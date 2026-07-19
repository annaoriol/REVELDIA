"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

import { createProject } from "@/core/Project";
import { Project } from "@/types/project";
import { ProjectRepository } from "@/storage/ProjectRepository";

type ProjectContextType = {
  project: Project;

  replaceProject: (
    project: Project
  ) => void;

  updateProject: (
    updater: (project: Project) => Project
  ) => void;

  newProject: () => void;
};

const ProjectContext =
  createContext<ProjectContextType | null>(null);

export function ProjectProvider({
  children,
}: {
  children: ReactNode;
}) {
  const repository = useMemo(
    () => new ProjectRepository(),
    []
  );

  const [project, setProject] =
    useState<Project>(() => {
      return (
        repository.load() ??
        createProject()
      );
    });

  function replaceProject(
    project: Project
  ) {
    repository.save(project);
    setProject(project);
  }

  function updateProject(
    updater: (project: Project) => Project
  ) {
    setProject((current) => {
      const updated = updater(current);

      repository.save(updated);

      return updated;
    });
  }

  function newProject() {
    const project = createProject();

    repository.save(project);

    setProject(project);
  }

  return (
    <ProjectContext.Provider
      value={{
        project,
        replaceProject,
        updateProject,
        newProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context =
    useContext(ProjectContext);

  if (!context) {
    throw new Error(
      "ProjectProvider missing"
    );
  }

  return context;
}