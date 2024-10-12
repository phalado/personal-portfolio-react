import { useState } from "react";
import ProjectMain from "./ProjectMain";
import ProjectIcons from "./ProjectIcons";
import styles from "../../../styles/ProjectStyles";

const ProjectPage = () => {
  const [language, setLanguage] = useState("");

  return (
    <>
      <h1 style={styles.title}>Some of my projects:</h1>
      <ProjectIcons setLanguage={setLanguage} />
      <ProjectMain language={language} />
    </>
  );
};

export default ProjectPage;
