import { ReactNode, createContext, useEffect, useState } from "react";

import getProjects from '../constants/projects';

import AppContextInterface from "../interfaces/AppContextInterface";

export const AppContext = createContext<AppContextInterface>({
  styleSize: "large",
  projectId: 1,
  setProjectId: () => {},
  projects: []
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [projectId, setProjectId] = useState(1)

  const resetProjects = () => getProjects

  const [projects] = useState(resetProjects())

  const windowSizeLogic = (windowSize: number) => {
    switch (true) {
      case windowSize >= 1200:
        return "large";
      case windowSize >= 750:
        return "big";
      case windowSize >= 500:
        return "medium";
      default:
        return "small";
    }
  };
  
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [styleSize, setStyleSize] = useState(windowSizeLogic(windowSize));

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => setStyleSize(windowSizeLogic(windowSize)), [windowSize]);

  return (
    <AppContext.Provider
      value={{
        styleSize,
        projectId,
        setProjectId,
        projects
      }}
    >
      {children}
    </AppContext.Provider>
  );
}