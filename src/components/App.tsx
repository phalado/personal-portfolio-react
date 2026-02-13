import { ReactNode, useState } from 'react';
import { AppProvider } from './AppContext';
import ContentModal from './ContentModal';
import { IconBaseProps } from 'react-icons';
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import { PiReadCvLogoDuotone } from 'react-icons/pi';

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

  const GmailIcon = SiGmail as unknown as (props: IconBaseProps) => JSX.Element;
  const LinkedinIcon = SiLinkedin as unknown as (props: IconBaseProps) => JSX.Element;
  const GithubIcon = SiGithub as unknown as (props: IconBaseProps) => JSX.Element;
  const ReadCvLogoIcon = PiReadCvLogoDuotone as unknown as (props: IconBaseProps) => JSX.Element;

  const closeContentModal = () => setIsOpenContentModal(false);

  return (
    <AppProvider>
      <div style={styles.container}>
        <div style={styles.subContainer}>
          <div style={styles.top}>
            <div style={styles.titlesContainer}>
              <h1 style={styles.name}>Raphael Cordeiro</h1>
              <h2 style={styles.title}>Full-Stack Problem Solver</h2>
              <h2 style={styles.subtitle}>Transforming complex challenges</h2>
              <h2 style={styles.subtitle}>into elegant and scalable solutions</h2>
              <h2 style={styles.stacks}>Ruby on Rails • React • Node.js</h2>
              <div
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  display: 'flex',
                  justifyContent: 'space-around',
                  width: '100%',
                }}
              >
                <a href="mailto:phalado.tech@gmail.com" title="Let's talk">
                  <GmailIcon color="red" size={30} style={{ marginRight: 10 }} />
                </a>
                <a
                  href="https://github.com/phalado"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Check out my GitHub"
                >
                  <GithubIcon color="white" size={30} style={{ marginRight: 10 }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/raphael-cordeiro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Let's connect on LinkedIn"
                >
                  <LinkedinIcon color="#0e76a8" size={30} style={{ marginRight: 10 }} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1n9s8Xo7l2mLh0a3j5Zt6v8w9x0y1z2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download my CV"
                >
                  <ReadCvLogoIcon color="#59dfff" size={30} />
                </a>
              </div>
            </div>
          </div>
          <div style={styles.linksContainerParent}>
            <div style={styles.linksContainer}>
              <HomePageLinks
                label="About"
                handleOnClick={() => {
                  setBigModal(false);
                  setIsOpenContentModal(true);
                  setModalContent(<About />);
                }}
              />
              <HomePageLinks
                label="Experience"
                handleOnClick={() => {
                  setBigModal(false);
                  setIsOpenContentModal(true);
                  setModalContent(<PastExperiences />);
                }}
              />
              <HomePageLinks
                label="Projects"
                handleOnClick={() => {
                  setBigModal(true);
                  setIsOpenContentModal(true);
                  setModalContent(<Projects />);
                }}
              />
              <HomePageLinks
                label="Articles"
                handleOnClick={() => {
                  setBigModal(false);
                  setIsOpenContentModal(true);
                  setModalContent(<Articles />);
                }}
              />
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
      </div>
      <ContentModal isOpenModal={isOpenContentModal} closeModal={closeContentModal} big={bigModal}>
        {modalContent}
      </ContentModal>
    </AppProvider>
  );
};

export default App;
