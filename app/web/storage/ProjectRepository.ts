import { Project } from "@/types/project";

const STORAGE_KEY = "reveldia.current-project";

export class ProjectRepository {

  save(project: Project): void {

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(project)

    );

  }

  load(): Project | null {

    const json =

      localStorage.getItem(

        STORAGE_KEY

      );

    if (!json) {

      return null;

    }

    return JSON.parse(json) as Project;

  }

  clear(): void {

    localStorage.removeItem(

      STORAGE_KEY

    );

  }

}