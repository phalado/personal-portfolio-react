import { ProjectStylesInterface } from "../interfaces/StylesInterface";

const ProjectStyles: ProjectStylesInterface = ({
  container: {
    backgroundColor: '#8ca4d4',
    borderRadius: 10,
    textAlign: 'center',
    width: '90%',
    margin: '1rem auto',
    color: 'white',
    overflow: 'overlay'
  },
  projContainer: {
    display: 'flex',
    height: '95%',
    width: '78%'
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
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
    fontSize: '1.4rem',
    margin: '0 3rem 1.5rem',
  },
  image: {
    maxWidth: '95%',
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
  arrows: {
    backgroundPosition: 'center',
    border: '0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    padding: '2rem',
    margin: '0.5rem',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  arrowLeft: {
    backgroundImage: "url('/contents/angle-left.svg')",
  },
  arrowRight: {
    backgroundImage: "url('/contents/angle-right.svg')",
  },
  iframe: {
    width: '80%',
    height: '100%'
  },
});

export default ProjectStyles;
