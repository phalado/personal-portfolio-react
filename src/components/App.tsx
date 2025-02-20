import { ReactNode, useState } from 'react';
import { AppProvider } from './AppContext';
import ContentModal from './ContentModal';
import images from '../constants/images';

import About from './Contents/About';
import PastExperiences from './Contents/Experience';
import Projects from './Contents/Projects';
import Articles from './Contents/Articles';
import Contact from './Contents/Contact';
import HomePageLinks from './HomePageLinks';

import styles from '../styles/AppStyles';
import '../App.css';

const App = () => {
  const [isOpenContentModal, setIsOpenContentModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(<></>);
  const [bigModal, setBigModal] = useState(false);

  const closeContentModal = () => setIsOpenContentModal(false);

  return (
    <AppProvider>
      <div style={styles.container}>
        <div style={styles.subContainer}>
          <div style={styles.top}>
            <img src={images.phaladoTechIcon} style={styles.icon} alt="Phalado Tech Icon" />
            <div style={styles.titlesContainer}>
              <h1 style={styles.name}>Raphael Cordeiro</h1>
              <h2 style={styles.title}>Full-Stack Developer</h2>
              <h2 style={styles.title}>Ruby on Rails | React | Node.js</h2>
            </div>
          </div>
          <div style={styles.linksContainer}>
            <HomePageLinks
              label="About"
              handleOnClick={() => {
                setBigModal(false);
                setIsOpenContentModal(true);
                setModalContent(<About />);
              }}
            />
            <span style={styles.betweenLinks}>|</span>
            <HomePageLinks
              label="Experience"
              handleOnClick={() => {
                setBigModal(false);
                setIsOpenContentModal(true);
                setModalContent(<PastExperiences />);
              }}
            />
            <span style={styles.betweenLinks}>|</span>
            <HomePageLinks
              label="Projects"
              handleOnClick={() => {
                setBigModal(true);
                setIsOpenContentModal(true);
                setModalContent(<Projects />);
              }}
            />
            <span style={styles.betweenLinks}>|</span>
            <HomePageLinks
              label="Articles"
              handleOnClick={() => {
                setBigModal(false);
                setIsOpenContentModal(true);
                setModalContent(<Articles />);
              }}
            />
            <span style={styles.betweenLinks}>|</span>
            <HomePageLinks
              label="Contact"
              handleOnClick={() => {
                setBigModal(false);
                setIsOpenContentModal(true);
                setModalContent(<Contact />);
              }}
            />
          </div>
        </div>
      </div>
      <ContentModal isOpenModal={isOpenContentModal} closeModal={closeContentModal} big={bigModal}>
        {modalContent}
      </ContentModal>
    </AppProvider>
  );
};

export default App;
