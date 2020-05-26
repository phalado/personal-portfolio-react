import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import HomeSelect from './HomeSelect';
import Project from '../containers/Project';
import Footer from './Footer';
import styles from '../styles/MainStyles';

const Main = () => (
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
      <h2 style={{ textAlign: 'center' }}>
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
      </h2>
    </main>
    <Footer />
  </Router>
);

export default Main;
