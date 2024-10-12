import { useState } from "react";
import styles from "../styles/AppStyles";

const HomePageLinks = (props: { label: string; handleOnClick: () => void }) => {
  const { label, handleOnClick } = props;

  const [linkStyles, setLinkStyles] = useState(styles.links);

  return (
    <div style={{ width: "20%", position: "relative" }}>
      <p
        style={linkStyles}
        onClick={handleOnClick}
        onMouseOver={() =>
          setLinkStyles({ ...styles.links, ...styles.increaseLink })
        }
        onMouseLeave={() =>
          setLinkStyles({ ...styles.links, ...styles.decreaseLink })
        }
      >
        {label}
      </p>
    </div>
  );
};

export default HomePageLinks;
