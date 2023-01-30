import React from 'react';
import { Paper } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';
import styles from '../styles/App';
import MainData from './SheetSections/MainData';

const App = () => (
  <Router>
    <div style={styles.container}>
      <Header />
      <Paper elevation={10} style={styles.paper}>
        <MainData />
      </Paper>
    </div>
  </Router>
);

export default App;
