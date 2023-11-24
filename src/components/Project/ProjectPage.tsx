import React, { useState } from 'react';
import ProjectMain from './ProjectMainContainer';
import ProjectIcons from './ProjectIcons';

const ProjectPage = () => {
  const [language, setLanguage] = useState('')

  return (
    <>
      <ProjectIcons setLanguage={setLanguage} />
      <ProjectMain language={language} />
    </>
  )
}

export default ProjectPage;
