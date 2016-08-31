import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

let store;

if (typeof(window) !== 'undefined') {
  const preloadState = window.__data;
  store = createStore(reducers, preloadState, compose(applyMiddleware(thunk), window.devToolsExtension && window.devToolsExtension()));
} else {
  store = createStore(reducers, compose(applyMiddleware(thunk)));
}

export default store;