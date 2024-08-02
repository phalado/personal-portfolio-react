import React, { useContext, useEffect, useState } from 'react';
import styles from '../../styles/Project';
import iconStyles from '../../styles/Icon';
import { AppContext } from '../AppContext';

const ProjectMain = ({ language }: { language: string }) => {
  const { projects } = useContext(AppContext)

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
