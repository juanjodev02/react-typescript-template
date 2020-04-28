import 'core-js';
import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './routes/App';
import './styles/global.scss';

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
