import { CSSProperties } from "react";

const ContactStyles: { [key: string]: CSSProperties } = {
  container: {
    width: "80%",
    marginLeft: "8%",
    overflowY: "auto",
    height: "80%",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    margin: 0,
    paddingTop: "1rem",
    paddingBottom: "2rem",
  },
  text: {
    fontSize: "20px",
  },
  link: {
    color: "white",
  },
  icon: {
    transition: "transform 0.3s ease-in-out",
  },
  increaseIcon: {
    transform: "scale3d(1.5, 1.5, 1)",
  },
  decreaseIcon: {
    transform: "scale3d(1, 1, 1)",
  },
};

export default ContactStyles;
