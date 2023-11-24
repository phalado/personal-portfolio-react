import React, { useEffect, useState } from 'react';
import getProjects from '../../constants/projects';
import styles from '../../styles/Project';
import iconStyles from '../../styles/Icon';
import ProjectInterface from '../../interfaces/ProjectInterface';

const ProjectMain = ({
  projects,
  projNumber,
  changeIndex,
  language
}: {
  projects: ProjectInterface[],
  projNumber: number,
  changeIndex: (index: number) => void,
  language: string
}) => {
  const [id, setId] = useState(0)
  const [langProjects, setLangProjects] = useState(projects);
  const [project, setProject] = useState(projects[id])
  const [iconStyle, setIconStyle] = useState(iconStyles.githubIcon)

  useEffect(() => {
    if (language === '') return

    setLangProjects(projects.filter(proj => proj.language === language))
    setId(0)
  }, [language, projects])

  useEffect(() => setProject(langProjects[id]), [id, langProjects])

  // useEffect

  // if (projects.length === 0) {
  //   projects = getProjects;
  //   setProject(projects.find(proj => proj.id === Number(id)) || projects[0]);
  //   setLangProjects(projects.filter(pro => pro.language === project.language));
  //   projNumber = langProjects.indexOf(project);
  //   changeIndex(projNumber);
  // } else {
  //   setProject(projects.find(proj => proj.id === Number(id)) || projects[0]);
  //   setLangProjects(projects.filter(pro => pro.language === project.language));
  // }

  const handleMouse = (style: any) => setIconStyle(style);

  const handleArrow = (value: number) => {
    if (value === langProjects.length) {
      setId(0);
    } else if (value < 0) {
      setId(langProjects.length - 1);
    } else {
      setId(value);
    }
  };

  if (project === undefined) return null

  return (
    <div style={styles.projContainer}>
      <input
        style={{ ...styles.arrowLeft, ...styles.arrows }}
        type="button"
        onClick={() => handleArrow(id - 1)}
      />
      <div style={styles.container}>
        <h1 style={styles.title}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >{project.name}</a>
          <p style={{ padding: '0 1rem' }}> - </p>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <input
              onMouseOver={() => handleMouse(iconStyles.githubIconHover)}
              onMouseLeave={() => handleMouse(iconStyles.githubIcon)}
              style={{ ...iconStyle, ...iconStyles.projectIcon }}
              type="button"
            />
          </a>
        </h1>
        {project.description.map((paragraph: string) => (
          <p style={styles.description} key={paragraph}>{paragraph}</p>
        ))}
        {project.iframe ?
          <iframe title={project.name} src={project.iframe} style={styles.iframe} /> :
          <img src={project.image} alt={project.name} style={styles.image} />
        }
      </div>
      <input
        style={{ ...styles.arrowRight, ...styles.arrows }}
        type="button"
        onClick={() => handleArrow(id + 1)}
      />
    </div>
  );
};

export default ProjectMain;
