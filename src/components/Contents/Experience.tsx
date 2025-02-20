import { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import getExperience from '../../constants/pastExperiences';
import styles from '../../styles/PastExperienceStyles';

const PastExperiences = () => {
  const experience = getExperience;
  const [currentId, setCurrentId] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(experience[currentId]);

  useEffect(() => setCurrentExperience(experience[currentId]), [currentId, experience]);

  const handleArrow = (id: number) => {
    setCurrentId(id);
  };

  return (
    <Container style={styles.container}>
      <h1 style={styles.title}>Work Experience:</h1>
      <div style={styles.experienceContainer}>
        <h2 style={styles.position}>{currentExperience.title}</h2>
        {currentExperience.subTitle && (
          <p style={styles.paragraphs}>{currentExperience.subTitle}</p>
        )}
        <Container>
          <ul>
            {currentExperience.topics.map((value: string) => (
              <li>
                <p style={styles.paragraphs}>{value}</p>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <div style={styles.leftColumn}>
        <h2 style={styles.companyLink}>
          <a
            style={{ color: 'black' }}
            href={currentExperience.website}
            target="_blank"
            rel="noreferrer"
          >
            {currentExperience.name}
          </a>
        </h2>
        <p style={styles.paragraphs}>{currentExperience.period}</p>
      </div>
      {currentId > 0 && (
        <input
          style={{ ...styles.arrowLeft, ...styles.arrows }}
          type="button"
          onClick={() => handleArrow(currentId - 1)}
        />
      )}
      {currentId < experience.length - 1 && (
        <input
          style={{ ...styles.arrowRight, ...styles.arrows }}
          type="button"
          onClick={() => handleArrow(currentId + 1)}
        />
      )}
    </Container>
  );
};

export default PastExperiences;
