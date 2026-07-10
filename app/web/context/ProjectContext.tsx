"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { createProject } from "@/core/Project";
import { Project } from "../types/project";

type ProjectContextType = {

  project: Project;

  setProject: React.Dispatch<
    React.SetStateAction<Project>
  >;

};

const ProjectContext =
createContext<ProjectContextType | null>(null);

export function ProjectProvider({

  children,

}:{

  children:ReactNode;

}){

  const [project,setProject]=

  useState<Project>(

    createProject()

  );

  return(

    <ProjectContext.Provider

      value={{

        project,

        setProject

      }}

    >

      {children}

    </ProjectContext.Provider>

  );

}

export function useProject(){

  const context=

  useContext(ProjectContext);

  if(!context){

    throw new Error(

      "ProjectProvider missing"

    );

  }

  return context;

}