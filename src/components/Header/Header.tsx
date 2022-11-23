import React from 'react';
import contactIcons from '../../constants/contactIcons';
import images from '../../constants/images';
import styles from '../../styles/Header';
import HeaderIcon from './HeaderIcon';

const Header = () => {
  const mediaList = ['linkedin', 'github', 'twitter', 'medium']

  return (
    <header style={styles.container}>
      <img src={images.phaladoTechIcon} style={styles.image} alt='Phalado Tech Icon' />
      <h2 style={styles.name}>Raphael Pereira Cordeiro</h2>
      <div style={styles.titleContainer}>
        <h1 style={styles.titleTexts}>Full-Stack Developer</h1>
        <h1 style={styles.titleTexts}>Rails - React</h1>
      </div>
      <div style={styles.iconContainer}>
        {mediaList.map((mediaName: string) => (
          <HeaderIcon media={contactIcons[mediaName]} key={mediaName} />
        ))}
      </div>
      <div style={styles.hamburguerIconContainer}>
        <img src={images.hamburguerIcon} alt='Click here' style={styles.hamburguerIcon} />
      </div>
    </header>
  )
};

export default Header;
