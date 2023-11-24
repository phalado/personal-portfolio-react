import React, { useState } from 'react';
import { Paper } from '@mui/material';
import Header from './Header/Header';
import TabsContainer from './Tabs';
import styles from '../styles/App';

const App = () => {
  const [currentTab, setCurrentTab] = useState('about')
  const backgroundColor: { readonly [key: string]: string } = {
    about: '#8ca4d4',
    exp: '#637aa6',
    proj: '#3e588c',
    contact: "#2d3950"
  }

  return (
    <div style={styles.container}>
      <Header />
      <Paper elevation={10} style={{ ...styles.paper, backgroundColor: backgroundColor[currentTab] }}>
        <TabsContainer currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </Paper>
    </div>
  );
}

export default App;
