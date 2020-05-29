import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Links from '../helpers/Links';
import NavbarIcon from './NavbarIcon';
import getProjects from '../constants/projects';
import styles from '../styles/NavbarStyles';
import NavbarList from './NavbarList';

const Navbar = props => {
  const { projects, addProject } = props;
  const { innerWidth } = window;

  useEffect(() => {
    if (projects.length === 0) {
      getProjects.forEach(project => {
        addProject(project);
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <nav style={innerWidth > 1200 ? styles.container : styles.containerSml}>
      <h1 style={innerWidth > 1200 ? styles.myName : styles.myNameSml}>Raphael Pereira Cordeiro</h1>
      <div style={styles.aboutMe}>
        <header style={styles.whatAmI}>
          <ul style={styles.wai}>
            <NavbarList text="FULL-STACK DEV" link="/" />
            <NavbarList text="WEBDESIGNER" link="/" />
            <NavbarList text="MASTER" link="/" />
            <NavbarList text="NERD" link="/" />
            <NavbarList text="HUSBAND" link="/" />
            <NavbarList text="CAT SLAVE" link="/" />
          </ul>
        </header>
      </div>
      <div style={styles.social}>
        <p style={styles.socialVisit}>Visit my social medias.</p>
        <ul style={styles.socialUL}>
          <li style={{ width: '25%' }}>
            <NavbarIcon
              link={Links.linkedin}
              styleGrey={styles.linkedinIcon}
              styleHover={styles.linkedinIconHover}
            />
          </li>
          <li style={{ width: '25%' }}>
            <NavbarIcon
              link={Links.github}
              styleGrey={styles.githubIcon}
              styleHover={styles.githubIconHover}
            />
          </li>
          <li style={{ width: '25%' }}>
            <NavbarIcon
              link={Links.twitter}
              styleGrey={styles.twitterIcon}
              styleHover={styles.twitterIconHover}
            />
          </li>
          <li style={{ width: '25%' }}>
            <NavbarIcon
              link={Links.medium}
              styleGrey={styles.mediumIcon}
              styleHover={styles.mediumIconHover}
            />
          </li>
        </ul>
        <p style={styles.socialEmailTitle}>My e-mail:</p>
        <p style={styles.socialEmail}>phalado@gmail.com</p>
      </div>
      <div style={styles.whereAmI}>
        <p style={{ margin: 0, lineHeight: 1 }}>
          Curently student at
          {' '}
          <a
            href={Links.microverse}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            Microverse
          </a>
          .
        </p>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProject: PropTypes.func.isRequired,
};

export default Navbar;
