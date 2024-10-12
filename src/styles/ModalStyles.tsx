import StylesInterface from "../interfaces/StylesInterface";

const MOdalStyles: StylesInterface = {
  modal: {
    padding: "50px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
    backgroundColor: "#ffffff80",
    borderRadius: "10px",
    overflowX: "hidden",
  },
  bigModal: {
    padding: "50px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "75%",
    backgroundColor: "#ffffff80",
    borderRadius: "10px",
    overflowX: "hidden",
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden"
  },
  modalOverlay: {
    position: "fixed",
    inset: "0px",
    backgroundColor: "#000000bf",
  },
};

export default MOdalStyles;
