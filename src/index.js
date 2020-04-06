import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';
import App from './components/App';

// You may optionally specify the initial state as the second argument to createStore().
// This is useful for hydrating the state of the client to match the
// state of a Redux application running on the server.
const store = createStore(reducers); //, window.STATE_FROM_SERVER);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
