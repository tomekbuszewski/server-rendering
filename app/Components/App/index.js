import React from 'react';
import { connect } from 'react-redux';
import AppCopmonent from './component';

const mapStateToProps = (state) => {
  return state
};

const App = connect(mapStateToProps)(AppCopmonent);

export default App;