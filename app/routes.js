import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-connect'
import { Provider } from 'react-redux';

import store from './store';

import App from './Components/App';
import Test from './Components/Test';

const reloadOnPropsChange = (props, nextProps) => {
  return props.location.pathname !== nextProps.location.pathname;
};

const routes = (
  <Provider store={store} key="provider">
    <Router render={(props) => <ReduxAsyncConnect {...props} reloadOnPropsChange={reloadOnPropsChange} />} history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="test" component={Test} />
      </Route>
    </Router>
  </Provider>
);

export default routes;