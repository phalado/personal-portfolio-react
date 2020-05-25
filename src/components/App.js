import React from 'react';
import Navbar from './Navbar';
import Main from '../containers/Main';
import styles from '../styles/AppStyles';

const App = () => (
  <div style={styles.container}>
    <Navbar />
    <Main />
  </div>
);

export default App;
