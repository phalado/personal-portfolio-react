import React from 'react';
import { Paper } from '@mui/material';
import filterButtonsArray from '../../constants/filterButtons';
import styles from '../../styles/ProjectHeader';

const ProjectIcons = (props: { setLanguage: (lang: string) => void }) => {
  const { setLanguage } = props;

  return (
    <Paper style={styles.container} elevation={10}>
      {filterButtonsArray.map(({ lang, src, alt }) => (
        <button
          type="button"
          style={styles.button}
          onClick={() => setLanguage(lang)}
          key={lang}
        >
          <img src={"../" + src} alt={alt} style={styles.image} />
        </button>
      ))}
    </Paper>
  )
}

export default ProjectIcons;
