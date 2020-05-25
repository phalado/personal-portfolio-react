/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Links from '../helpers/Links';
import NavbarIcon from './NavbarIcon';
import styles from '../styles/NavbarStyles';

const Navbar = () => (
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
          <NavbarIcon
            link={Links.linkedin}
            styleGrey={styles.linkedinIcon}
            styleHover={styles.linkedinIconHover}
          />
          <NavbarIcon
            link={Links.github}
            styleGrey={styles.githubIcon}
            styleHover={styles.githubIconHover}
          />
          <NavbarIcon
            link={Links.twitter}
            styleGrey={styles.twitterIcon}
            styleHover={styles.twitterIconHover}
          />
          <NavbarIcon
            link={Links.medium}
            styleGrey={styles.mediumIcon}
            styleHover={styles.mediumIconHover}
          />
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
          style={{ color: 'white' }}
        >
          Microverse
        </a>
        .
      </p>
    </div>
  </nav>
);

export default Navbar;
