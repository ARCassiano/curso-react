import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import reducers from "./main/reducers";
import App from './main/App';

import promise from "redux-promise";
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);