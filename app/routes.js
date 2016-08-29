import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-connect'
import App from './Components/App';
import { Provider } from 'react-redux';

import store from './store';

const routes = (
  <Provider store={store} key="provider">
    <Router render={(props) => <ReduxAsyncConnect {...props}/>} history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
);

export default routes;