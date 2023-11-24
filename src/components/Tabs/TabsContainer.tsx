import React from 'react';
import About from './About';
import Tabs from './Tabs';
import { Container } from '@mui/material';
import styles from '../../styles/Tabs';
import ProjectPage from '../Project';

const TabsContainer = (props: any) => {
  const { currentTab, setCurrentTab } = props;

  return (
    <Container style={styles.container}>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}  />
      {currentTab === 'about' && <About />}
      {currentTab === 'proj' && <ProjectPage />}
    </Container>
  )
}

export default TabsContainer
