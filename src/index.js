import React from 'react';
import ReactDOM from 'react-dom';
import App1 from '../src/pages/App1';
import App2 from '../src/pages/App2';
import App3 from '../src/pages/App3';
import App4 from '../src/pages/App4';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';



ReactDOM.render(
  <React.StrictMode>
    <App3 />
  </React.StrictMode>,
  document.getElementById('root')
)

