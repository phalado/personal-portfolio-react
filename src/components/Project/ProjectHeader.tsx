import React from 'react';
import { useNavigate } from 'react-router-dom';
import filterButtonsArray from '../../constants/filterButtons';
import ProjectInterface from '../../interfaces/ProjectInterface';
import styles from '../../styles/ProjectHeader';

const ProjectHeader = ({
  projects,
  filterLang,
  changeIndex
}: {
  projects: ProjectInterface[],
  filterLang: (lang: string) => void,
  changeIndex: (index:number) => void
}) => {
  const history = useNavigate();

  const handleClick = (lang: string) => {
    filterLang(lang);
    changeIndex(0);
    const filteredProjects = projects.filter((proj: ProjectInterface) => proj.language === lang);
    history(`/project/${filteredProjects[0].id}`);
  };

  const filterButtons = (lang: string, src: string, alt: string) => (
    <button type="button" style={styles.button} onClick={() => handleClick(lang)}>
      <img src={"../" + src} alt={alt} style={styles.image} />
    </button>
  )

  return (
    <header style={styles.container}>
      {filterButtonsArray.map(({ lang, src, alt }) => filterButtons(lang, src, alt))}
    </header>
  );
};

export default ProjectHeader;
