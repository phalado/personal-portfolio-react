import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Links from '../helpers/Links';
import NavbarIcon from './NavbarIcon';
import getProjects from '../constants/projects';
import styles from '../styles/NavbarStyles';

const Navbar = props => {
  const { projects, addProject } = props;

  useEffect(() => {
    if (projects.length === 0) {
      getProjects.forEach(project => {
        addProject(project);
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <nav style={styles.container}>
      <h1 style={styles.myName}>Raphael Pereira Cordeiro</h1>
      <div style={styles.aboutMe}>
        <header style={styles.whatAmI}>
          <ul style={styles.wai}>
            <li style={styles.waiList}>FULL-STACK DEV</li>
            <li style={styles.waiList}>WEBDESIGNER</li>
            <li style={styles.waiList}>MASTER</li>
            <li style={styles.waiList}>NERD</li>
            <li style={styles.waiList}>HUSBAND</li>
            <li style={styles.waiList}>CAT SLAVE</li>
          </ul>
        </header>
        <div style={styles.social}>
          <p style={styles.socialVisit}>Visit my social medias.</p>
          <ul style={styles.socialUL}>
            <li>
              <NavbarIcon
                link={Links.linkedin}
                styleGrey={styles.linkedinIcon}
                styleHover={styles.linkedinIconHover}
              />
            </li>
            <li>
              <NavbarIcon
                link={Links.github}
                styleGrey={styles.githubIcon}
                styleHover={styles.githubIconHover}
              />
            </li>
            <li>
              <NavbarIcon
                link={Links.twitter}
                styleGrey={styles.twitterIcon}
                styleHover={styles.twitterIconHover}
              />
            </li>
            <li>
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
      </div>
      <div style={styles.whereAmI}>
        <p>
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
