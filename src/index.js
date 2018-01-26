import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PromiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import './index.css';
import App from './App';
import reducer from './redux/reducer';

const store = createStore(
    reducer,
    applyMiddleware(new PromiseMiddleware(), logger),
  )

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
