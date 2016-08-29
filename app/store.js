import { createStore } from 'redux';

import reducers from './reducers';

let store;

const preloadState = window.__PRELOADED_STATE__;
if (typeof(window) !== 'undefined') {
  store = createStore(reducers, preloadState, window.devToolsExtension && window.devToolsExtension());
} else {
  store = createStore(reducers, preloadState);
}

export default store;