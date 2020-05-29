import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import Navbar from '../containers/Navbar';
import styles from '../styles/AppStyles';

const App = () => (
  <Router>
    <div style={styles.container}>
      <Navbar />
      <Main />
    </div>
  </Router>
);

export default App;
