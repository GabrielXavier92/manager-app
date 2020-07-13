import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';

import '@shopify/polaris/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
