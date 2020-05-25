const addProject = project => ({
  type: 'ADD_PROJECT',
  project,
});

const filterLanguage = language => ({
  type: 'FILTER_LANGUAGE',
  language,
});

const changeProjectIndex = index => ({
  type: 'CHANGE_INDEX',
  index,
});

export { addProject, filterLanguage, changeProjectIndex };
