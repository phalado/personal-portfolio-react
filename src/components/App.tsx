import { useState } from 'react';

import Header from './Header/Header';
import TabsContainer from './Tabs';
import { AppProvider } from './AppContext';
import { Paper } from '@mui/material';

import styles from '../styles/App';
import '../App.css'

const App = () => {
  const [currentTab, setCurrentTab] = useState('about')
  const backgroundColor: { readonly [key: string]: string } = {
    about: '#8ca4d4',
    exp: '#637aa6',
    proj: '#3e588c',
    articles: "#2d3950",
    contact: "#000e23"
  }

  return (
    <AppProvider>
      <div style={styles.container}>
        <Header />
        <Paper elevation={10} style={{ ...styles.paper, backgroundColor: backgroundColor[currentTab] }}>
          <TabsContainer currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </Paper>
      </div>
    </AppProvider>
  );
}

export default App;
