import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomeSelectStyles';

const HomeSelect = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Click on a button to see my projects:</h1>
      <Link to="/project/1">
        <button type="button" style={styles.button}>
          <img
            src="contents/react-redux.png"
            alt="React and Redux button"
            style={styles.image}
          />
        </button>
      </Link>
      <Link to="/project/2">
        <button type="button" style={styles.button}>
          <img
            src="contents/react.png"
            alt="React button"
            style={styles.image}
          />
        </button>
      </Link>
      <Link to="/project/3">
        <button type="button" style={styles.button}>
          <img
            src="contents/native.png"
            alt="React native button"
            style={styles.image}
          />
        </button>
      </Link>
      <Link to="/project/4">
        <button type="button" style={styles.button}>
          <img
            src="contents/javascript.png"
            alt="Javascript button"
            style={styles.image}
          />
        </button>
      </Link>
      <Link to="/project/5">
        <button type="button" style={styles.button}>
          <img
            src="contents/rails.png"
            alt="Ruby on Rails button"
            style={styles.image}
          />
        </button>
      </Link>
      <Link to="/project/6">
        <button type="button" style={styles.button}>
          <img
            src="contents/ruby.png"
            alt="Ruby button"
            style={styles.image}
          />
        </button>
      </Link>
      <Link to="/project/1">
        <button type="button" style={styles.button}>
          <img
            src="contents/html-css.png"
            alt="HTML and CSS button"
            style={styles.image}
          />
        </button>
      </Link>
    </div>
  );
};

export default HomeSelect;
