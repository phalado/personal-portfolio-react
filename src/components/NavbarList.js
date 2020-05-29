import React from 'react';
import { Link, Route } from 'react-router-dom';
import ReactHover from 'react-hover';
import PropTypes from 'prop-types';
import styles from '../styles/NavbarStyles';

const NavbarList = props => {
  const { text, link } = props;

  const options = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
  };

  return (
    <li style={styles.list}>
      <ReactHover options={options}>
        <ReactHover.Trigger type="trigger">
          <Route>
            <Link to={link} style={styles.waiList}>
              {text}
            </Link>
          </Route>
        </ReactHover.Trigger>
        <ReactHover.Hover type="hover">
          <div style={styles.hoverBox}><p>Go back to Homepage!</p></div>
        </ReactHover.Hover>
      </ReactHover>
    </li>
  );
};

NavbarList.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavbarList;
