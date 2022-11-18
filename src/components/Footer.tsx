import React from 'react';
import styles from '../styles/Footer';

const Footer = () => {
  const date = new Date();
  const styling = window.innerWidth > 1200
    ? { ...styles.container, width: '80%' } : { ...styles.container, width: '100%' };

  return (
    <footer style={styling}>
      <p>
        ©
        {' '}
        {date.getFullYear()}
        {' '}
        Phalado Tech - Made in Brazil
      </p>
    </footer>
  );
};

export default Footer;
