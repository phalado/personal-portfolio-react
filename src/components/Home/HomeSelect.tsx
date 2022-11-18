import React from 'react';
import { useNavigate } from 'react-router-dom';
import filterButtonsArray from '../../constants/filterButtons';
import ProjectInterface from '../../interfaces/ProjectInterface';
import styles from '../../styles/HomeSelect';

const HomeSelect = ({
  projects,
  filterLang,
  changeIndex
}:{
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
      <img src={src} alt={alt} style={styles.image} />
    </button>
  )

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Click on a button to see some of my projects:</h1>
      {filterButtonsArray.map(({ lang, src, alt }) => filterButtons(lang, src, alt))}
    </div>
  );
};

export default HomeSelect;
