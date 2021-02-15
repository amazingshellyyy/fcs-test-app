import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// require('es6-promise').polyfill();
require('core-js/features/promise');       // for promise
require('core-js/es/object/assign');       // for assign
require('core-js/es/array/includes');      // for includes

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
