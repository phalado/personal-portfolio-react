import StylesInterface from "../interfaces/StylesInterface";

const ProjectHeaderStyles: StylesInterface = {
  container: {
    color: "#333",
    width: "15%",
    margin: 0,
    borderRadius: "10px",
    display: "flex",
    placeContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffffbd",
    marginLeft: "4%",
    flexDirection: "column",
  },
  button: {
    border: "none",
    height: "4rem",
    background: "transparent",
    borderRadius: 10,
    cursor: "pointer",
    maxWidth: "90%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
};

export default ProjectHeaderStyles;
