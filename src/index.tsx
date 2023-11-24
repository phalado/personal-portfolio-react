import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Main from './containers/Main';
import reportWebVitals from './reportWebVitals';

import projectsReducer from './slicers/projectsSlicer'
import projNumberReducer from './slicers/projNumberSlicer'
import languageReducer from './slicers/languageSlicer'

const store = configureStore({
  reducer: {
    projects: projectsReducer.reducer,
    projNumber: projNumberReducer.reducer,
    language: languageReducer.reducer,
  }
});

const container = document.getElementById("root")
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
