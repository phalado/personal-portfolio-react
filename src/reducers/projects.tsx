import ProjectInterface from "../interfaces/ProjectInterface";

const projects = (state = [], action: { type: string, project: ProjectInterface }) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return ([...state,
        {
          id: action.project.id,
          name: action.project.name,
          language: action.project.language,
          live: action.project.live,
          repo: action.project.repo,
          image: action.project.image,
          description: action.project.description,
        }]);
    default:
      return state;
  }
};

export default projects;
