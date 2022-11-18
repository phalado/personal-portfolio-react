import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../containers/Main';
import Navbar from './Navbar';
import styles from '../styles/App';

const App = () => (
  <Router>
    <div style={styles.container}>
      <Navbar />
      <Main />
    </div>
  </Router>
);

export default App;
