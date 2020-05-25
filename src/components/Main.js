import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeHeader from './HomeHeader';
import HomeSelect from './HomeSelect';
import Project from '../containers/Project';
import Footer from './Footer';
import getProjects from '../constants/projects';
import styles from '../styles/MainStyles';

const Main = props => {
  const { projects, addProject } = props;

  useEffect(() => {
    if (projects.length === 0) {
      getProjects.forEach(project => {
        addProject(project);
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <main style={styles.container}>
        <Switch>
          <Route exact path="/">
            <HomeHeader />
            <HomeSelect />
          </Route>
          <Route path="/project/:id">
            <Project />
          </Route>
        </Switch>
        <h1 style={{ textAlign: 'center' }}>
          To see all my projects in Microverse you can visit
          {' '}
          <a
            href="https://github.com/phalado/Personal-Projects"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'black' }}
          >
            this portfolio.
          </a>
        </h1>
      </main>
      <Footer />
    </Router>
  );
};

Main.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProject: PropTypes.func.isRequired,
};

export default Main;
