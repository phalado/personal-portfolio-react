import React from 'react';
import { Container, Typography } from '@mui/material';
import styles from '../../styles/Tabs';

const Tabs = (props: any) => {
  const { setCurrentTab } = props

  return (
    <Container style={styles.tabList}>
      <Typography
        align='center'
        variant='subtitle1'
        style={{ ...styles.tab, backgroundColor: '#8ca4d4' }}
        onClick={() => setCurrentTab('about')}
      >
        About
      </Typography>

      <Typography
        align='center'
        variant='subtitle1'
        style={{ ...styles.tab, backgroundColor: '#637aa6' }}
        onClick={() => setCurrentTab('exp')}
      >
        Past Experience
      </Typography>

      <Typography
        align='center'
        variant='subtitle1'
        style={{ ...styles.tab, backgroundColor: '#3e588c' }}
        onClick={() => setCurrentTab('proj')}
      >
        Projects
      </Typography>

      <Typography
        align='center'
        variant='subtitle1'
        style={{ ...styles.tab, backgroundColor: '#2d3950' }}
        onClick={() => setCurrentTab('contact')}
      >
        Contact
      </Typography>
    </Container>
  )
}

export default Tabs
