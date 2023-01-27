import { TabsStylesInterface } from "../interfaces/StylesInterface";

const TabsStyles: TabsStylesInterface = ({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    height: "100%",

  },
  tabList: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "21%"
  },
  tab: {
    transform: "rotate(90deg)",
    width: "100%",
    fontSize: "large",
    flexGrow: 1,
    border: "none"
  },
  tabPanel: {
    width: "90%"
  }
});

export default TabsStyles;