import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


import './index.css';

import App from './app';
import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
