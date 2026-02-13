import StylesInterface from '../interfaces/StylesInterface';

const AppStyles: StylesInterface = {
  container: {
    height: '100%',
    backgroundImage: 'url(./contents/background3.jpeg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  subContainer: {
    height: '100%',
    backgroundColor: '#00000066',
    display: 'flex',
    justifyContent: 'space-between',
  },
  top: {
    display: 'flex',
    padding: '20px',
    height: 'fit-content',
  },
  icon: {
    height: '100px',
  },
  titlesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '24px',
    backgroundColor: '#00000066',
    borderRadius: '10px',
  },
  name: {
    margin: 0,
    color: '#4bc1ff',
    fontSize: '45px',
  },
  title: {
    margin: 0,
    color: '#59dfff',
    fontSize: '55px',
  },
  subtitle: {
    margin: -5,
    color: '#f2fbfd',
    fontSize: '25px',
    fontStyle: 'italic',
  },
  stacks: {
    marginTop: 20,
    color: '#59dfff',
    fontSize: '25px',
  },
  linksContainerParent: {
    flex: 1,
    justifyItems: 'center',
    marginTop: '10px',
  },
  linksContainer: {
    display: 'flex',
    alignSelf: 'center',
    width: '75%',
    height: '50px',
    backgroundColor: '#ffffffa8',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
  },
  links: {
    color: '#000000',
    fontSize: 25,
    textShadow: '1px 1px 2px #0000006b',
    cursor: 'pointer',
    padding: '12px 12px 5px 12px',
    borderRadius: '10px',
    position: 'absolute',
    left: '50%',
    right: 'auto',
    top: 25,
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.5s ease-in-out',
  },
  increaseLink: {
    transform: 'translate(-50%, -50%) scale3d(1.2, 1.2, 1)',
  },
  decreaseLink: {
    transform: 'translate(-50%, -50%) scale3d(1, 1, 1)',
  },
};

export default AppStyles;
//
