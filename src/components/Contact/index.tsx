import { Container } from '@mui/system';
import styles from '../../styles/Contact';

const Contact = () => {
  return (
    <Container style={styles.container}>
      <h1 style={styles.title}>Let's talk:</h1>
      <p style={styles.text}>Download my CV here.</p>
      <p style={styles.text}>Add me on linkedin.</p>
      <p style={styles.text}>Star my projects on github.</p>
      <p style={styles.text}>Follow me on X.</p>
      <p style={styles.text}>Follow me also on Medium.</p>
      <p style={styles.text}>
        Or send me a hi: <a href='mailto:phalado.tech@gmail.com' style={styles.link}>phalado.tech@gmail.com</a>
      </p>
    </Container>
  )
}

export default Contact;
