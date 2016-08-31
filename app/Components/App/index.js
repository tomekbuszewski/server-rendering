import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';

import AppComponent from './component';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  fetch(id) { dispatch(actions.fetch(id)) }
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;