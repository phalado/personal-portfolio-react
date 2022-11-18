import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Navbar';

const NavbarList = ({ text, link }: { text: string, link: string }) => (
    <li style={styles.list}>
      <Link to={link} style={styles.waiList} title={text}>
        {text}
      </Link>
    </li>
  );

export default NavbarList;
