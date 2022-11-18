const language = (state = null, action: { type: string, language: string }) => {
  switch (action.type) {
    case 'FILTER_LANGUAGE':
      return (action.language);
    default:
      return state;
  }
};

export default language;
