import { HeaderStylesInterface } from "../interfaces/StylesInterface";

const HeaderStyles: HeaderStylesInterface = ({
  container: {
    width: '80%',
    height: '8%',
    backgroundColor: 'rgb(51, 51, 51)',
    marginTop: '20px',
    marginLeft: '10%',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
    justifyContent: 'space-around',

  },
  image: {
    width: '11%',
    height: '80%',
    marginLeft: '1%'
  },
  name: {
    color: 'white',
    width: '200px',
    textAlign: 'center'
  },
  titleContainer: {
    display: 'flex',
    marginLeft: '1%',
    textAlign: 'center',
    flexDirection: 'column'
  },
  titleTexts: {
    color: 'white',
    margin: 0
  },
  iconContainer: {
    display: 'flex',
    height: '100%',
    width: '20%',
    alignItems: 'center',
    textAlign: 'center'
  },
  hamburguerIconContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  hamburguerIcon: {
    height: '50%',
    cursor: 'pointer'
  }
});

export default HeaderStyles;
