import ProjectInterface from "./ProjectInterface";

export default interface AppContextInterface {
  styleSize: string;
  projectId: number;
  setProjectId: (projectId: number) => void;
  projects: ProjectInterface[];
  // language: string;
  // projNumber: number;
  // index?: number;
}
