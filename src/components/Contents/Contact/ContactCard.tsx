import { useState } from 'react';
import styles from '../../../styles/Contact';
import { Card } from '@mui/material';

const ContactCard = ({
  icon,
  href,
  title,
  text,
}: {
  icon: JSX.Element;
  href: string;
  title: string;
  text: string;
}) => {
  const [iconStyles, setIconStyles] = useState({ ...styles.icon });

  return (
    <Card style={styles.card}>
      <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
        <p style={styles.text}>{text}</p>
        <span
          onMouseOver={() => setIconStyles({ ...iconStyles, ...styles.increaseIcon })}
          onMouseLeave={() => setIconStyles({ ...iconStyles, ...styles.decreaseIcon })}
        >
          {icon}
        </span>
      </a>
    </Card>
  );
};

export default ContactCard;
