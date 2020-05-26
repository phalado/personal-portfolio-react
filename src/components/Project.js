import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import getProjects from '../constants/projects';
import NavbarIcon from './NavbarIcon';
import styles from '../styles/ProjectStyles';

const Project = props => {
  let { projects } = props;
  const { index, changeIndex } = props;
  const { id } = useParams();
  if (projects.length === 0) {
    projects = getProjects;
  }
  const project = projects.find(proj => proj.id === parseInt(id, 10));

  return (
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
  );
};

Project.propTypes = {
  projects: PropTypes.objectOf(PropTypes.array).isRequired,
  index: PropTypes.number.isRequired,
  changeIndex: PropTypes.func.isRequired,
};

export default Project;
