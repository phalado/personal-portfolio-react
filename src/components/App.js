import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import styles from '../styles/AppStyles';

const App = () => (
  <div style={styles.container}>
    <Navbar />
  </div>
);

export default App;
