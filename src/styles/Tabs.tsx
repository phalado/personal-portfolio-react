import { TabsStylesInterface } from "../interfaces/StylesInterface";

const TabsStyles: TabsStylesInterface = ({
  container: {
    display: "flex",
    height: "100%",
    margin: 0,
    padding: 0,
    maxWidth: "100%",
    position: "relative",
    alignItems: 'center'
  },
  tabList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-around',
    height: "100%",
    width: "3%",
    padding: 0,
    margin: 0,
    position: "absolute",
    right: '-10px',
  },
  tab: {
    writingMode: "vertical-lr",
    width: "100%",
    height: "25%",
    fontSize: "large",
    border: "1px solid white",
    borderLeft: 0,
    borderRadius: "0 10px 10px 0",
    cursor: "pointer"
  },
});

export default TabsStyles;