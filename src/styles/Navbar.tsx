import { NavbarStylesInterface } from "../interfaces/StylesInterface";

const NavbarStyles: NavbarStylesInterface = ({
  container: {
    float: 'left',
    position: 'fixed',
    width: '18%',
    height: 'calc(100% - 20px)',
    backgroundColor: '#3e588c',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
  },
  containerSml: {
    width: '100%',
    backgroundColor: '#3e588c',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  myName: {
    textAlign: 'center',
    fontSize: '2rem',
    margin: '1.5rem 1.5rem',
  },
  abtSclContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 3,
  },
  abtSclContainerSml: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 3,
  },
  abtSclContainerSmler: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 3,
    flexWrap: 'wrap',
  },
  aboutMe: {
    display: 'block',
    flexGrow: 3,
  },
  whatAmI: {
    padding: '1rem 2rem',
    height: 'calc(100% - 1rem)',
  },
  hoverBox: {
    backgroundColor: 'papayawhip',
    width: '200px',
    height: '60px',
    borderStyle: 'dashed',
    borderColor: 'chocolate',
    color: 'black',
    textAlign: 'center',
    fontSize: '1.2rem',
  },
  wai: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    height: '100%',
    justifyContent: 'space-around',
  },
  list: {
    listStyle: 'none',
    textAlign: 'center',
  },
  waiList: {
    lineHeight: 1.3,
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    display: 'inline',
    paddingBottom: '20px',
    color: 'white',
    textDecoration: 'none',
  },
  whereAmI: {
    padding: '0.75rem 2.5rem',
    fontSize: '1.5rem',
    lineHeight: 2,
    textAlign: 'center',
    color: 'white',
    flexGrow: 1,
  },
  social: {
    margin: '1.5rem',
    padding: '0.5rem 1,25rem',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2,
  },
  socialUL: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0,
    margin: '1rem 0',
    listStyle: 'none',
    flexGrow: 2,
    flexWrap: 'wrap',
  },
  iconList: {
    width: '25%',
  },
  iconListSml: {
    width: '4rem',
    minWidth: '50%',
    height: '3rem',
    maxHeight: '4rem',
    textAlign: 'center',
  },
  aboutIcon: {
    border: '0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: 'transparent',
    backgroundPositionX: 'center',
    height: '100%',
    width: '70%',
  },
  linkedinIcon: {
    backgroundImage: "url('/contents/linkedin.svg')",
  },
  linkedinIconHover: {
    backgroundImage: "url('/contents/linkedinHover.svg')",
    cursor: 'pointer',
  },
  githubIcon: {
    backgroundImage: "url('/contents/github.svg')",
  },
  githubIconHover: {
    backgroundImage: "url('/contents/githubHover.svg')",
    cursor: 'pointer',
  },
  twitterIcon: {
    backgroundImage: "url('/contents/twitter.svg')",
  },
  twitterIconHover: {
    backgroundImage: "url('/contents/twitterHover.svg')",
    cursor: 'pointer',
  },
  mediumIcon: {
    backgroundImage: "url('/contents/medium.svg')",
  },
  mediumIconHover: {
    backgroundImage: "url('/contents/mediumHover.svg')",
    cursor: 'pointer',
  },
  socialEmail: {
    textAlign: 'center',
    fontSize: '1.4rem',
    lineHeight: 1,
    margin: 0,
    flexGrow: 1,
  },
});

export default NavbarStyles;
