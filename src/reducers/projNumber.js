const projNumber = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_INDEX':
      return (action.index);
    default:
      return state;
  }
};

export default projNumber;
