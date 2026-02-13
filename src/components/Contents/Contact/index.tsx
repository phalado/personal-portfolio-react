import { useState } from 'react';
import { Container } from '@mui/system';
import styles from '../../../styles/Contact';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import ArticleIcon from '@mui/icons-material/Article';
import { IconBaseProps } from 'react-icons';
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import { Card } from '@mui/material';
import ContactCard from './ContactCard';

const Contact = () => {
  const [iconStyles, setIconStyles] = useState({ ...styles.icon });

  const GmailIcon = SiGmail as unknown as (props: IconBaseProps) => JSX.Element;
  const LinkedinIcon = SiLinkedin as unknown as (props: IconBaseProps) => JSX.Element;
  const GithubIcon = SiGithub as unknown as (props: IconBaseProps) => JSX.Element;

  return (
    <Container style={styles.container}>
      <h1 style={styles.title}>Let's talk:</h1>
      <div>
        <ContactCard
          icon={<ArticleIcon style={iconStyles} />}
          href="https://drive.google.com/file/d/1n9s8Xo7l2mLh0a3j5Zt6v8w9x0y1z2/view?usp=sharing"
          title="Download my CV"
          text="Download my CV:"
        />

        <ContactCard
          icon={<LinkedinIcon color="#0e76a8" style={iconStyles} />}
          href="https://www.linkedin.com/in/phalado/"
          title="Connect with me on LinkedIn"
          text="Connect with me on LinkedIn:"
        />

        <ContactCard
          icon={<GithubIcon color="action" style={iconStyles} />}
          href="https://github.com/phalado"
          title="Star my projects on GitHub"
          text="Star my projects on GitHub:"
        />

        <ContactCard
          icon={<GmailIcon color="red" style={iconStyles} />}
          href="mailto:phalado.tech@gmail.com"
          title="Send me hi"
          text="Send me hi:"
        />

        <p style={styles.text}>
          Follow me on X <XIcon />
        </p>
        <p style={styles.text}>Follow me also on Medium.</p>
      </div>
    </Container>
  );
};

export default Contact;
