import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getProjects from '../../constants/projects';
import NavbarIcon from '../Navbar/NavbarIcon';
import styles from '../../styles/Project';
import ProjectInterface from '../../interfaces/ProjectInterface';

const ProjectMain = ({
  projects,
  projNumber,
  changeIndex
}: {
  projects: ProjectInterface[],
  projNumber: number,
  changeIndex: (index: number) => void
}) => {
  const { id } = useParams();
  const history = useNavigate();
  let project: ProjectInterface | any = {};
  let langProjects: ProjectInterface[] = [];

  if (projects.length === 0) {
    projects = getProjects;
    project = projects.find(proj => proj.id === Number(id));
    langProjects = projects.filter(pro => pro.language === project.language);
    projNumber = langProjects.indexOf(project);
    changeIndex(projNumber);
  } else {
    project = projects.find(proj => proj.id === Number(id));
    langProjects = projects.filter(pro => pro.language === project.language);
  }

  const projIndex = projNumber || langProjects.indexOf(project);

  const handleArrow = (value: number) => {
    if (value === langProjects.length) {
      changeIndex(0);
      history(`/project/${langProjects[0].id}`);
    } else if (value < 0) {
      changeIndex(langProjects.length - 1);
      history(`/project/${langProjects[langProjects.length - 1].id}`);
    } else {
      changeIndex(value);
      history(`/project/${langProjects[value].id}`);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <input
        style={{ ...styles.arrowLeft, ...styles.arrows }}
        type="button"
        onClick={() => handleArrow(Number(projIndex) - 1)}
      />
      <div style={styles.container}>
        <h1 style={styles.title}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            {project.name}
          </a>
          <p style={{ padding: '0 1rem' }}> - </p>
          <NavbarIcon
            link={project.repo}
            styleGrey={styles.githubIcon}
            styleHover={styles.githubIconHover}
            big
          />
        </h1>
        {project.description.map((paragraph: string) => (
          <p style={styles.description} key={paragraph}>{paragraph}</p>
        ))}
        <img src={project.image} alt={project.name} style={styles.image} />
      </div>
      <input
        style={{ ...styles.arrowRight, ...styles.arrows }}
        type="button"
        onClick={() => handleArrow(projIndex + 1)}
      />
    </div>
  );
};

export default ProjectMain;
