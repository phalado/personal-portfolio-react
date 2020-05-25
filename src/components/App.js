import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import styles from '../styles/AppStyles';

const App = () => (
  <div style={styles.container}>
    <Navbar />
    <Main />
  </div>
);

export default App;
