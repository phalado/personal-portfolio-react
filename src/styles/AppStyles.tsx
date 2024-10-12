import StylesInterface from "../interfaces/StylesInterface";

const AppStyles: StylesInterface = {
  container: {
    height: "100%",
    backgroundImage: "url(./contents/background3.jpeg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  subContainer: {
    height: "100%",
    backgroundColor: "#00000066",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  top: {
    display: "flex",
    padding: "20px",
  },
  icon: {
    height: "100px",
  },
  titlesContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "24px",
  },
  name: {
    margin: 0,
    color: "#ffffffc9",
    fontSize: "35px",
  },
  title: {
    margin: 0,
    color: "#ffffffc9",
    fontSize: "25px",
  },
  linksContainer: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    width: "55%",
    paddingBottom: "30px",
  },
  links: {
    color: "#ffffffc9",
    fontSize: 25,
    cursor: "pointer",
    backgroundColor: "#00000096",
    padding: "12px 12px 5px 12px",
    borderRadius: "10px",
    position: "absolute",
    left: "50%",
    right: "auto",
    bottom: "-65px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "transform 0.5s ease-in-out",
  },
  betweenLinks: {
    color: "#ffffffc9",
    fontSize: "25px",
  },
  increaseLink: {
    transform: "translate(-50%, -50%) scale3d(1.5, 1.5, 1)",
  },
  decreaseLink: {
    transform: "translate(-50%, -50%) scale3d(1, 1, 1)",
  },
};

export default AppStyles;
//
