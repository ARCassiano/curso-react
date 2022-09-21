import ReactDOM from 'react-dom/client'
import React from 'react'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import promise from 'redux-promise';
import multi from 'redux-multi';

import App from './main/app'
import reducers from "./main/reducers";
import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools);
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Provider store={store}><App /></Provider>);