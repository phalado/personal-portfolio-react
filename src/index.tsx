import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';
// import StateInterface from './interfaces/StateInterface';

const initialState: any = {
  projects: [],
  language: 'en',
  projNumber: 0,
};

const store = createStore(
  rootReducer,
  initialState
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
