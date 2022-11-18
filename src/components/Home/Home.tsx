import React from 'react';
import HomeSelect from '../../containers/HomeSelect';
import HomeHeader from './HomeHeader';

const Home = () => (
  <>
    <HomeHeader />
    <HomeSelect />
    <h2 style={{ textAlign: 'center' }}>
      To see all my projects in Microverse you can visit
      {' '}
      <a
        href="https://github.com/phalado/Personal-Projects"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'black' }}
      >
        this portfolio.
      </a>
    </h2>
  </>
)

export default Home;
