const NavbarStyles = ({
  container: {
    float: 'left',
    position: 'fixed',
    width: '18%',
    height: 'calc(100% - 20px)',
    backgroundColor: '#3e588c',
    color: 'white',
    display: 'table',
    borderRadius: 10,
  },
  myName: {
    textAlign: 'center',
  },
  aboutMe: {
    display: 'block',
  },
  whatAmI: {
    padding: '1.25rem 2rem',
  },
  wai: {
    display: 'inline-grid',
    margin: 0,
    padding: 0,
  },
  waiList: {
    overflow: 'hidden',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    // visibility: 'hidden',
    lineHeight: 1.3,
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    display: 'inline',
    paddingBottom: '10px',
  },
  whereAmI: {
    padding: '0.75rem 2.5rem',
    fontSize: '1.5rem',
    lineHeight: 2,
    textAlign: 'center',
    color: 'white',
  },
  social: {
    margin: '1.5rem',
    padding: '0.5rem 1,25rem',
    borderRadius: '20px',
  },
  socialVisit: {
    textAlign: 'center',
    fontSize: '2rem',
    lineHeight: 1,
    paddingTop: '2rem',
    marginBottom: 0,
  },
  socialUL: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 0 2rem 0',
    listStyle: 'none',
  },
  aboutIcon: {
    border: '0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    padding: '1.3rem',
    margin: '0.5rem',
    backgroundColor: 'transparent',
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
  socialEmailTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    lineHeight: 1,
    marginTop: 0,
  },
  socialEmail: {
    textAlign: 'center',
    fontSize: '1.7rem',
    lineHeight: 1,
    paddingBottom: '2rem',
    marginTop: 0,
  },
});

export default NavbarStyles;
