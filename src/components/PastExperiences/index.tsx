import { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import getExperience from '../../constants/pastExperiences';
import styles from '../../styles/PastExperience';

const PastExperiences = () => {
  const experience = getExperience;
  const [currentId, setCurrentId] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(experience[currentId])

  useEffect(() => setCurrentExperience(experience[currentId]), [currentId, experience])

  const handleArrow = (id: number) => {
    setCurrentId(id)
  }

  return (
    <Container style={styles.container}>
      <h1 style={styles.title}>Work Experience:</h1>
      <div style={styles.experienceContainer}>
        <div style={styles.leftColumn}>
          <h2 style={styles.companyLink}><a style={{ color: 'white' }} href={currentExperience.website} target='_blank' rel='noreferrer'>{currentExperience.name}</a></h2>
          <p style={styles.paragraphs}>{currentExperience.period}</p>
        </div>
        <div style={styles.rightColumn}>
          <h2 style={styles.position}>{currentExperience.title}</h2>
          {currentExperience.subTitle && <p style={styles.paragraphs}>{currentExperience.subTitle}</p>}
          <ul>
            {currentExperience.topics.map((value: string) => <li><p style={styles.paragraphs}>{value}</p></li>)}
          </ul>
        </div>
      </div>
      <div style={styles.arrowsContainer}>
        {currentId > 0 && <input
          style={{ ...styles.arrowLeft, ...styles.arrows }}
          type="button"
          onClick={() => handleArrow(currentId - 1)}
        />}
        {currentId < experience.length - 1 && <input
          style={{ ...styles.arrowRight, ...styles.arrows }}
          type="button"
          onClick={() => handleArrow(currentId + 1)}
        />}
      </div>
    </Container>
  )
}

export default PastExperiences
