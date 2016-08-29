import { createStore } from 'redux';

import reducers from './reducers';

let store;

if (typeof(window) !== 'undefined') {
  const preloadState = window.__data;
  store = createStore(reducers, preloadState, window.devToolsExtension && window.devToolsExtension());
} else {
  store = createStore(reducers);
}

export default store;