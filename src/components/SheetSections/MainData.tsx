import React from 'react';
import { Container, TextField } from '@mui/material';
import styles from '../../styles/MainData';

const MainData = () => {
  return (
    <Container style={styles.container}>
      <TextField
        variant="outlined"
        label="Character Name"
        value="Raphael Pereira Cordeiro"
        style={styles.inputs}
        disabled
      />
      <TextField
        variant="outlined"
        label="Level"
        value="35"
        style={styles.inputs}
        disabled
      />
      <TextField
        variant="outlined"
        label="Race"
        value="Developer"
        style={styles.inputs}
        disabled
      />
      <TextField
        variant="outlined"
        label="Class"
        value="Full Stack"
        style={styles.inputs}
        disabled
      />
    </Container>
  )
}

export default MainData
