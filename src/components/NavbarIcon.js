/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/NavbarStyles';

const NavbarIcon = props => {
  const { link, styleGrey, styleHover } = props;
  const [button, setButton] = useState({ ...styles.aboutIcon, ...styleGrey });

  const handleMouse = style => {
    setButton({ ...styles.aboutIcon, ...style });
  };

  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <input
          onMouseOver={() => handleMouse(styleHover)}
          onMouseLeave={() => handleMouse(styleGrey)}
          style={button}
          type="button"
        />
      </a>
    </li>
  );
};

NavbarIcon.propTypes = {
  link: PropTypes.string.isRequired,
  styleGrey: PropTypes.objectOf(PropTypes.string).isRequired,
  styleHover: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default NavbarIcon;
