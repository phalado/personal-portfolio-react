import { CSSProperties } from "react";

const PastExperienceStyle: { [key: string]: CSSProperties } = ({
  container: {
    width: "80%",
    marginLeft: "8%",
    overflowY: 'auto',
    height: '100%'
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
    paddingTop: '1rem',
    paddingBottom: '2rem',
  },
  paragraphs: {
    paddingBottom: '1.5rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    lineHeight: 1.2,
    fontSize: '1.25rem',
    margin: '7px'
  },
  experienceContainer: {
    display: 'flex'
  },
  leftColumn: {
    width: '40%',
    textAlign: 'center'
  },
  rightColumn: {

  },
  companyLink: {
    margin: 0,
    textAlign: 'center'
  },
  position: {
    margin: '30px'
  },
  arrowsContainer: {
    position: 'relative'
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
    position: 'absolute',
    top: '-20px',
  },
  arrowLeft: {
    backgroundImage: "url('/contents/angle-left.svg')",
    left: 0
  },
  arrowRight: {
    backgroundImage: "url('/contents/angle-right.svg')",
    right: 0
  },
});

export default PastExperienceStyle;