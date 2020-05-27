import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import getProjects from '../constants/projects';
import NavbarIcon from './NavbarIcon';
import styles from '../styles/ProjectStyles';

const Project = props => {
  let { projects, index } = props;
  const { changeIndex } = props;

  const { id } = useParams();
  const history = useHistory();
  let project = {};
  let langProjects = [];

  if (projects.length === 0) {
    projects = getProjects;
    project = projects.find(proj => proj.id === parseInt(id, 10));
    langProjects = projects.filter(pro => pro.language === project.language);
    index = langProjects.indexOf(project);
    changeIndex(index);
  } else {
    project = projects.find(proj => proj.id === parseInt(id, 10));
    langProjects = projects.filter(pro => pro.language === project.language);
  }

  const projIndex = index || langProjects.indexOf(project);

  const handleArrow = value => {
    if (value === langProjects.length) {
      changeIndex(0);
      history.push(`/project/${langProjects[0].id}`);
    } else if (value < 0) {
      changeIndex(langProjects.length - 1);
      history.push(`/project/${langProjects[langProjects.length - 1].id}`);
    } else {
      changeIndex(value);
      history.push(`/project/${langProjects[value].id}`);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <input
        style={{ ...styles.arrowLeft, ...styles.arrows }}
        type="button"
        onClick={() => handleArrow(parseInt(projIndex, 10) - 1)}
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
          />
        </h1>
        {project.description.map(paragraph => (
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

Project.propTypes = {
  projects: PropTypes.objectOf(PropTypes.array).isRequired,
  index: PropTypes.number.isRequired,
  changeIndex: PropTypes.func.isRequired,
};

// Project.defaultProps = {
//   index: 0,
// };

export default Project;
