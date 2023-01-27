import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from '../../styles/Tabs';
import About from './About';

const TabsContainer = () => {
  return (
    <Tabs style={styles.container}>
      <TabList style={styles.tabList}>
        <Tab style={styles.tab}>About me</Tab>
        <Tab style={styles.tab}>Projects</Tab>
        <Tab style={styles.tab}>Professional Experience</Tab>
      </TabList>

      <TabPanel style={styles.tabPanel}>
        <About />
      </TabPanel>
      <TabPanel style={styles.tabPanel}>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel style={styles.tabPanel}>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  )
}

export default TabsContainer
