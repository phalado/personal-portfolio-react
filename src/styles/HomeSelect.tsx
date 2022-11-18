import { HomeSelectStylesInterface } from "../interfaces/StylesInterface";

const HomeSelectStyles: HomeSelectStylesInterface = ({
  container: {
    background: 'transparent',
    borderRadius: 10,
    textAlign: 'center',
    border: 'solid',
    borderColor: '#333',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
    paddingTop: 15,
    paddingBottom: 15,
    color: '#333',
  },
  button: {
    border: 'none',
    height: '10rem',
    maxWidth: '100%',
    background: 'transparent',
    borderRadius: 10,
    margin: 10,
    cursor: 'pointer',
    paddingLeft: '3rem',
  },
  image: {
    height: '100%',
    maxWidth: '100%',
  },
});

export default HomeSelectStyles;
