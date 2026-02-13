import { CSSProperties } from 'react';

const ContactStyles: { [key: string]: CSSProperties } = {
  container: {
    width: '80%',
    marginLeft: '8%',
    overflowY: 'auto',
    height: '80%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffffffa8',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '200px',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
    paddingTop: '1rem',
    paddingBottom: '2rem',
  },
  text: {
    fontSize: '20px',
  },
  link: {
    color: 'white',
  },
  icon: {
    transition: 'transform 0.3s ease-in-out',
    fontSize: '80px',
  },
  increaseIcon: {
    transform: 'scale3d(1.2, 1.2, 1)',
  },
  decreaseIcon: {
    transform: 'scale3d(1, 1, 1)',
  },
};

export default ContactStyles;
