import { createStore } from 'redux';

import reducers from './reducers';

let store;

if (typeof(window) !== 'undefined') {
  const preloadState = window.__PRELOADED_STATE__;
  store = createStore(reducers, preloadState);
} else {
  store = createStore(reducers);
}

export default store;