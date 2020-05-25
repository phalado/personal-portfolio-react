import React from 'react';
import styles from '../styles/FooterStyles';

const Footer = () => {
  const date = new Date();
  return (
    <footer style={styles.container}>
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
