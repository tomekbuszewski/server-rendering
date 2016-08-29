import { combineReducers } from 'redux';
import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-connect'
import AppState from './Components/App/reducer';

const reducers = combineReducers({
  reduxAsyncConnect,
  AppState
});

export default reducers;