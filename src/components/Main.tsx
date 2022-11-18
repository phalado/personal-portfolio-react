import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CatSlavePage from '../aboutPages/CatSlavePage';
import HusbandPage from '../aboutPages/HusbandPage';
import ChristianPage from '../aboutPages/ChristianPage';
import Footer from './Footer';
import Home from './Home';
import ProjectPage from './Project';

import getProjects from '../constants/projects';
import styles from '../styles/Main';
import ProjectInterface from '../interfaces/ProjectInterface';

const Main = ({
  projects,
  addProject
}: {
  projects: ProjectInterface[],
  addProject: (project: ProjectInterface) => void
}) => {
  const [pageStyle, setPageStyle] = useState(styles.container);

  useLayoutEffect(() => {
    const updateSize = () => {
      const { innerWidth } = window;
      if (innerWidth > 1200) {
        setPageStyle(styles.container);
      } else {
        setPageStyle(styles.containerSml);
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  });

  useEffect(() => {
    if (projects.length > 0) return;

    getProjects.forEach(project => addProject(project));
  }, [projects, addProject]);

  return (
    <div>
      <main style={pageStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/cat-slave" element={<CatSlavePage />} />
          <Route path="/husband" element={<HusbandPage />} />
          <Route path="/christian" element={<ChristianPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
