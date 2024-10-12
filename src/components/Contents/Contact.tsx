import { Container } from "@mui/system";
import styles from "../../styles/Contact";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import { useState } from "react";

const Contact = () => {
  const [iconStyles, setIconStyles] = useState({ ...styles.icon });

  return (
    <Container style={styles.container}>
      <h1 style={styles.title}>Let's talk:</h1>
      <p style={styles.text}>
        Download my CV here{" "}
        <span
          onMouseOver={() =>
            setIconStyles({ ...iconStyles, ...styles.increaseIcon })
          }
          onMouseLeave={() =>
            setIconStyles({ ...iconStyles, ...styles.decreaseIcon })
          }
        >
          <ArticleIcon style={iconStyles} />
        </span>
      </p>
      <p style={styles.text}>
        Add me on linkedin <LinkedInIcon />
      </p>
      <p style={styles.text}>
        Star my projects on github <GitHubIcon color="action" />
      </p>
      <p style={styles.text}>
        Follow me on X <XIcon />
      </p>
      <p style={styles.text}>Follow me also on Medium.</p>
      <p style={styles.text}>
        Or send me a hi:{" "}
        <a href="mailto:phalado.tech@gmail.com" style={styles.link}>
          phalado.tech@gmail.com
        </a>
      </p>
    </Container>
  );
};

export default Contact;
