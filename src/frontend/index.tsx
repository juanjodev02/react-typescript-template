import 'core-js';
import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { counterReducer } from './store/counter/reducer';
// import { RootState, rootReducer } from './store/';
import App from './routes/App';
import 'semantic-ui-css/semantic.min.css';

// import { rootReducer } from './redux';
import { rootReducer } from './store';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
