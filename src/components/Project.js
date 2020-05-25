import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Project = props => {
  const { projects, index, changeIndex } = props;
  const { id } = useParams();
  const project = projects.find(proj => proj.id === parseInt(id, 10));

  return (
    <div>
      <h1>{project.id}</h1>
      <h1>{project.name}</h1>
      <h2>{project.language}</h2>
      <h3>{project.repo}</h3>
      <h3>{project.live}</h3>
      <p>{project.description[0]}</p>
    </div>
  );
};

Project.propTypes = {
  projects: PropTypes.objectOf(PropTypes.array).isRequired,
  index: PropTypes.number.isRequired,
  changeIndex: PropTypes.func.isRequired,
};

export default Project;
