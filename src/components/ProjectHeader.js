import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styles from '../styles/ProjectHeaderStyles';

const ProjectHeader = props => {
  const { projects, filterLang, changeIndex } = props;
  const history = useHistory();

  const handleClick = lang => {
    filterLang(lang);
    changeIndex(0);
    const filteredProjects = projects.filter(proj => proj.language === lang);
    history.push(`/project/${filteredProjects[0].id}`);
  };

  return (
    <header style={styles.container}>
      <button type="button" style={styles.button} onClick={() => history.push('/')}>
        <img
          src="../contents/home.svg"
          alt="Home button"
          style={styles.image}
        />
      </button>
      <button type="button" style={styles.button} onClick={() => handleClick('react')}>
        <img
          src="../contents/react-redux.png"
          alt="React and Redux button"
          style={styles.image}
        />
      </button>
      <button type="button" style={styles.button} onClick={() => handleClick('native')}>
        <img
          src="../contents/native.png"
          alt="React native button"
          style={styles.image}
        />
      </button>
      <button type="button" style={styles.button} onClick={() => handleClick('javascript')}>
        <img
          src="../contents/javascript.png"
          alt="Javascript button"
          style={styles.image}
        />
      </button>
      <button type="button" style={styles.button} onClick={() => handleClick('rails')}>
        <img
          src="../contents/rails.png"
          alt="Ruby on Rails button"
          style={styles.image}
        />
      </button>
      <button type="button" style={styles.button} onClick={() => handleClick('ruby')}>
        <img
          src="../contents/ruby.png"
          alt="Ruby button"
          style={styles.image}
        />
      </button>
      <button type="button" style={styles.button} onClick={() => handleClick('html')}>
        <img
          src="../contents/html-css.png"
          alt="HTML and CSS button"
          style={styles.image}
        />
      </button>
    </header>
  );
};

ProjectHeader.propTypes = {
  projects: PropTypes.objectOf(PropTypes.array).isRequired,
  filterLang: PropTypes.func.isRequired,
  changeIndex: PropTypes.func.isRequired,
};


export default ProjectHeader;
