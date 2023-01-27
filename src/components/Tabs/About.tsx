import { Container } from '@mui/system';
import React from 'react';
import styles from '../../styles/About';

const About = () => {
  return (
    <Container>
      <h1 style={styles.title}>About my portfolio:</h1>
      <p style={styles.paragraphs}>
        I love facing new challenges. Seeing a well-done job after hours and days of work is one
        of the best feelings that I ever experienced. And that is my fuel to work so hard: be able
        to, in the end, look at my newly completed work and be satisfied.
      </p>
      <p style={styles.paragraphs}>
        My logical thinking is one of my main work tools. I've been a developer for some years now,
        but I've always been a problem solver. For me, coding is like a puzzle to be put together and
        I know that I have all the pieces I need in reach - sometimes they will be on Stack Overflow,
        but, eventually, I will be able to reach them.
      </p>
      <p style={styles.paragraphs}>
        I've been working as a Full-Stack developer/Software Engineer, using, as main stacks, React
        for Front-End and Ruby on Rails for back-End. 
      </p>
      <p style={styles.paragraphs}>
        <span style={styles.span}>My main skills: </span>
        React, Redux, React Native, Ruby, ruby on Rails, JavaScript, TypeScript, HTML, CSS/SCSS,
        PostgreSQL, Rspec, Rest API, Elasticsearch, Material UI, Redux, and Flow.js
      </p>
      <p style={styles.paragraphs}>
        <span style={styles.span}>Other of my skills that may be of interest: </span>
        GraphQL, Sidekiq, MSQL, Pair Programming, Agile Methodologies, Git, Webpack, Heroku,
        Netlify, and Amazon S3.
      </p>
    </Container>
  )
}

export default About
