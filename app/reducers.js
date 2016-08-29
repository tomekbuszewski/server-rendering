import { combineReducers } from 'redux';
import { ReduxAsyncConnect as reduxAsyncConnect } from 'redux-connect'

import AppState from './Components/App/reducer';

const reducers = combineReducers({
  reduxAsyncConnect,
  AppState
});

export default reducers;