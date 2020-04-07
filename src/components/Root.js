import { createStore } from 'redux';
import React from 'react';
import reducers from '../redux/reducers';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// You may optionally specify the initial state as the second argument to createStore().
// This is useful for hydrating the state of the client to match the
// state of a Redux application running on the server.
const store = createStore(reducers); //, window.STATE_FROM_SERVER);

const Root = () => {
  return (
    <Router>
      <Provider store={store}>
        <Route path="/:filter?" component={App} />
      </Provider>
    </Router>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
