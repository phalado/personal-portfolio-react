import React from 'react';
import Main from './Main';
import Navbar from '../containers/Navbar';
import styles from '../styles/AppStyles';

const App = () => (
  <div style={styles.container}>
    <Navbar />
    <Main />
  </div>
);

export default App;
