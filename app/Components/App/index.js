import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';

import AppComponent from './component';

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => actions.fetch(dispatch)
  }
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;