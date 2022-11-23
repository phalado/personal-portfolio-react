import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from '../styles/App';
import Header from './Header/Header';

const App = () => (
  <Router>
    <div style={styles.container}>
      <Header />
    </div>
  </Router>
);

export default App;
