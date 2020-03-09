import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Root from './components/root';
import store from './store';
import { Provider } from 'react-redux';
import { history } from './utils';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('main')
);
