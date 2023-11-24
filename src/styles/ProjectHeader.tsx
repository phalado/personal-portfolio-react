import { ProjectHeaderStylesInterface } from "../interfaces/StylesInterface";

const ProjectHeaderStyles: ProjectHeaderStylesInterface = ({
  container: {
    color: '#333',
    width: '15%',
    height: '90%',
    margin: 0,
    borderRadius: '10px',
    display: 'flex',
    placeContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: '4%',
    flexDirection: 'column'
  },
  button: {
    border: 'none',
    height: '4rem',
    background: 'transparent',
    borderRadius: 10,
    cursor: 'pointer',
    maxWidth: '90%',
  },
  image: {
    height: '100%',
    width: '100%'
  },
});

export default ProjectHeaderStyles;
