import StylesInterface from "../interfaces/StylesInterface";

const ProjectStyles: StylesInterface = {
  container: {
    backgroundColor: "transparent",
    border: "1px black solid",
    borderRadius: 10,
    textAlign: "center",
    width: "90%",
    margin: "1rem auto",
    color: "white",
    overflow: "overlay",
  },
  projContainer: {
    display: "flex",
    height: "95%",
    width: "78%",
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "bold",
    margin: 0,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  link: {
    color: "inherit",
  },
  description: {
    fontSize: "1.4rem",
    margin: "0 3rem 1.5rem",
  },
  image: {
    maxWidth: "95%",
    marginBottom: "1rem",
  },
  githubIcon: {
    backgroundImage: "url('/contents/github.svg')",
    backgroundPosition: "center",
    transform: "scale3d(1, 1, 1)",
  },
  githubIconHover: {
    backgroundImage: "url('/contents/githubHover.svg')",
    backgroundPosition: "center",
    cursor: "pointer",
    transform: "scale3d(1.5, 1.5, 1)",
  },
  projectIcon: {
    border: "0",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundColor: "transparent",
    backgroundPositionX: "center",
    height: "36px",
    width: "35px",
    transition: "transform 0.5s ease-in-out",
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
  },
  arrowLeft: {
    backgroundImage: "url('/contents/angle-left.svg')",
  },
  arrowRight: {
    backgroundImage: "url('/contents/angle-right.svg')",
  },
  iframe: {
    width: "80%",
    height: "100%",
  },
};

export default ProjectStyles;
