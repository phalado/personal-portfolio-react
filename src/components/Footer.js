import React from 'react';
import styles from '../styles/FooterStyles';

const Footer = () => {
  const date = new Date();
  const { innerWidth } = window;
  const styling = innerWidth > 1200
    ? { ...styles.container, width: '80%' } : { ...styles.container, width: '100%' };

  return (
    <footer style={styling}>
      <p>
        ©
        {' '}
        {date.getFullYear()}
        {' '}
        Phalado - Made in Brazil
      </p>
    </footer>
  );
};

export default Footer;
