import ProjectInterface from "../interfaces/ProjectInterface";

const addProject = (project: ProjectInterface) => ({
  type: 'ADD_PROJECT',
  project,
});

const filterLanguage = (language: string) => ({
  type: 'FILTER_LANGUAGE',
  language,
});

const changeProjectIndex = (index: number) => ({
  type: 'CHANGE_INDEX',
  index,
});

export { addProject, filterLanguage, changeProjectIndex };
