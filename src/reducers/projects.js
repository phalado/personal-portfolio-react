const projects = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return ([...state,
        {
          action,
        }]);
    default:
      return state;
  }
};

export default projects;
