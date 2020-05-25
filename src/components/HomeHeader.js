import React from 'react';
import styles from '../styles/HomeHeaderStyles';

const HomeHeader = () => (
  <header style={styles.container}>
    <h1 style={styles.title}>About my portfolio:</h1>
    <p style={styles.paragraphs}>
      As a Microverse student, I spent more than 1100 hours mastering web development,
      algorithms, data structures and full-stack development.
      I developed several projects by myself and in cooperation using
      Ruby on Rails, Javascript, React and Redux.
    </p>
    <p style={styles.paragraphs}>
      I also developed skills in remote pair-programming using GitHub,
      industry-standard git flows, and daily stand-ups to communicate and collaborate with
      remote developers of different parts of the world.
    </p>
    <p style={styles.paragraphs}>
      <span style={styles.span}>Some of my skills: </span>
      React, Redux, React Native, JavaScript ES6, Ruby, Ruby on Rails, HTML, CSS/SCSS, Phaser 3,
      Webpack, Jest, APIs, Bootstrap, SQLite, RSpec, Capybara, Git, GitHub, Webpack, Heroku,
      Netlify, Amazon S3, Omniauth, Python, Lucid chart, Devise, Minitest, PostgreSQL,
      Remote Work, Pair Programming
    </p>
  </header>
);

export default HomeHeader;
