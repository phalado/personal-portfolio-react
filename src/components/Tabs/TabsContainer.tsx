import About from './About';
import Tabs from './Tabs';
import { Container } from '@mui/material';
import ProjectPage from '../Project';
import PastExperiences from '../PastExperiences';
import Articles from '../Articles';
import Contact from '../Contact';

import styles from '../../styles/Tabs';

const TabsContainer = (props: any) => {
  const { currentTab, setCurrentTab } = props;

  return (
    <Container style={styles.container}>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}  />
      {currentTab === 'about' && <About />}
      {currentTab === 'proj' && <ProjectPage />}
      {currentTab === 'exp' && <PastExperiences />}
      {currentTab === 'articles' && <Articles />}
      {currentTab === 'contact' && <Contact />}
    </Container>
  )
}

export default TabsContainer
