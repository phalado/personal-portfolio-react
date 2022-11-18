import React, { useState } from 'react';
import { NavbarStylesInterface } from '../../interfaces/StylesInterface';
import styles from '../../styles/Navbar';

const NavbarIcon = ({
  link,
  styleGrey,
  styleHover,
  big = false
}: {
  link: string,
  styleGrey: any,
  styleHover: any,
  big?: boolean
}) => {
  const [button, setButton] = useState({ ...styles.aboutIcon, ...styleGrey });

  const handleMouse = (style: NavbarStylesInterface) => setButton({ ...styles.aboutIcon, ...style });

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={!big ? { width: '100%' } : {}}>
      <input
        onMouseOver={() => handleMouse(styleHover)}
        onMouseLeave={() => handleMouse(styleGrey)}
        style={big ? { ...button, padding: '2rem' } : button}
        type="button"
      />
    </a>
  );
};

export default NavbarIcon;
