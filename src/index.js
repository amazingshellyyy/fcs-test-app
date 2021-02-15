import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

require('es6-promise').polyfill();
require('core-js/es6/object');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
