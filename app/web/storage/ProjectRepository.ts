import { Project } from "@/types/project";

const STORAGE_KEY = "reveldia.current-project";

export class ProjectRepository {

  save(project: Project): void {

    if (typeof window === "undefined") {

      return;

    }

    window.localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(project)

    );

  }

  load(): Project | null {

    if (typeof window === "undefined") {

      return null;

    }

    const json = window.localStorage.getItem(

      STORAGE_KEY

    );

    if (!json) {

      return null;

    }

    try {

      return JSON.parse(json) as Project;

    } catch {

      return null;

    }

  }

  clear(): void {

    if (typeof window === "undefined") {

      return;

    }

    window.localStorage.removeItem(

      STORAGE_KEY

    );

  }

}