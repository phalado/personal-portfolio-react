import StylesInterface from "../interfaces/StylesInterface";

const PastExperienceStyle: StylesInterface = {
  container: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    margin: 0,
    paddingTop: "1rem",
    paddingBottom: "2rem",
  },
  paragraphs: {
    paddingBottom: "1.5rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    lineHeight: 1.2,
    fontSize: "1.25rem",
    margin: "7px",
  },
  experienceContainer: {
    marginLeft: "30%",
    overflowY: "auto",
  },
  leftColumn: {
    width: "30%",
    textAlign: "center",
    position: "absolute",
    top: "40%",
  },
  rightColumn: {},
  companyLink: {
    margin: 0,
    textAlign: "center",
  },
  position: {
    margin: "30px",
  },
  arrows: {
    backgroundPosition: "center",
    border: "0",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    padding: "2rem",
    margin: "0.5rem",
    backgroundColor: "transparent",
    cursor: "pointer",
    position: "absolute",
    top: "40%",
  },
  arrowLeft: {
    backgroundImage: "url('/contents/angle-left.svg')",
    left: "-50px",
  },
  arrowRight: {
    backgroundImage: "url('/contents/angle-right.svg')",
    right: "-50px",
  },
};

export default PastExperienceStyle;
