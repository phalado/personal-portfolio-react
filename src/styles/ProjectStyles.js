const ProjectStyles = ({
  container: {
    backgroundColor: '#8ca4d4',
    borderRadius: 10,
    textAlign: 'center',
    width: '90%',
    margin: '1rem auto',
    color: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: 0,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: 'inherit',
  },
  description: {
    fontSize: '1.5rem',
    margin: '0 5rem 2rem',
  },
  image: {
    width: '95%',
    marginBottom: '1rem',
  },
  githubIcon: {
    backgroundImage: "url('/contents/github.svg')",
    backgroundPosition: 'center',
  },
  githubIconHover: {
    backgroundImage: "url('/contents/githubHover.svg')",
    backgroundPosition: 'center',
    cursor: 'pointer',
  },
});

export default ProjectStyles;
