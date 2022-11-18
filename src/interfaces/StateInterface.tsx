import ProjectInterface from "./ProjectInterface";

export default interface StateInterface {
  projects: ProjectInterface[];
  language: string;
  projNumber: number;
  index?: number;
}
