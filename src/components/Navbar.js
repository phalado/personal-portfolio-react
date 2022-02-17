import React, { useEffect, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Links from '../helpers/Links';
import NavbarIcon from './NavbarIcon';
import getProjects from '../constants/projects';
import styles from '../styles/NavbarStyles';
import NavbarList from './NavbarList';

const Navbar = props => {
  const { projects, addProject } = props;
  const [pageStyle, setPageStyle] = useState(styles.container);
  const [iconStyle, setIconStyle] = useState(styles.iconList);
  const [midContainer, setMidContainer] = useState(styles.abtSclContainer);

  useEffect(() => {
    if (projects.length === 0) {
      getProjects.forEach(project => {
        addProject(project);
      });
    }
    // eslint-disable-next-line
  }, []);

  useLayoutEffect(() => {
    const updateSize = () => {
      const { innerWidth } = window;
      if (innerWidth > 1200) {
        setPageStyle(styles.container);
        setIconStyle(styles.iconList);
        setMidContainer(styles.abtSclContainer);
      } else if (innerWidth < 420) {
        setPageStyle(styles.containerSml);
        setIconStyle(styles.iconListSml);
        setMidContainer(styles.abtSclContainerSmler);
      } else {
        setPageStyle(styles.containerSml);
        setIconStyle(styles.iconListSml);
        setMidContainer(styles.abtSclContainerSml);
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  });

  return (
    <nav style={pageStyle}>
      <h1 style={styles.myName}>Raphael Pereira Cordeiro</h1>
      <div style={midContainer}>
        <div style={styles.aboutMe}>
          <header style={styles.whatAmI}>
            <ul style={styles.wai}>
              <NavbarList text="FULL-STACK DEV" link="/" />
              <NavbarList text="MASTER" link="/" />
              <NavbarList text="NERD" link="/" />
              <NavbarList text="HUSBAND" link="/husband" />
              <NavbarList text="CAT SLAVE" link="/cat-slave" />
              <NavbarList text="CHRISTIAN" link="/christian" />
            </ul>
          </header>
        </div>
        <div style={styles.social}>
          <ul style={styles.socialUL}>
            <li style={iconStyle}>
              <NavbarIcon
                link={Links.linkedin}
                styleGrey={styles.linkedinIcon}
                styleHover={styles.linkedinIconHover}
              />
            </li>
            <li style={iconStyle}>
              <NavbarIcon
                link={Links.github}
                styleGrey={styles.githubIcon}
                styleHover={styles.githubIconHover}
              />
            </li>
            <li style={iconStyle}>
              <NavbarIcon
                link={Links.twitter}
                styleGrey={styles.twitterIcon}
                styleHover={styles.twitterIconHover}
              />
            </li>
            <li style={iconStyle}>
              <NavbarIcon
                link={Links.medium}
                styleGrey={styles.mediumIcon}
                styleHover={styles.mediumIconHover}
              />
            </li>
          </ul>
          <p style={styles.socialEmail}>phalado@gmail.com</p>
        </div>
      </div>
      <div style={styles.whereAmI}>
        <p style={{ margin: 0, lineHeight: 1 }}>
          Currently Full-Stack Dev at
          {' '}
          <a
            href={Links.bycoders}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            Bycoders_
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
