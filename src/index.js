import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Routes from './routes';
import './index.scss';

const reduxDebugger =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  reduxDebugger,
  applyMiddleware(logger, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
