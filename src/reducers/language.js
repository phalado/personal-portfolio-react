const language = (state = null, action) => {
  switch (action.type) {
    case 'FILTER_LANGUAGE':
      return (action.language);
    default:
      return state;
  }
};

export default language;
