import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

let store;

if (typeof(window) !== 'undefined') {
  const preloadState = window.__data;
  store = createStore(reducers, preloadState, applyMiddleware(thunk), window.devToolsExtension && window.devToolsExtension());
} else {
  store = createStore(reducers, applyMiddleware(thunk));
}

export default store;