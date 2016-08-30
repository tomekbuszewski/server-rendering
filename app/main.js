import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { getState } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect'

import store from './store';

import App from './Components/App';

render(
  <Provider store={store} key="provider">
    <Router render={(props) => <ReduxAsyncConnect {...props}/>} history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);