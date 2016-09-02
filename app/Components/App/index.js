import React from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';

import actions from './actions';

const mapStateToProps = (state) => {
  return { data: state.AppState.data }
};
const mapDispatchToProps = (dispatch) => {
  return {}
};

@asyncConnect([
  {
    key:     'fetch',
    promise: ({ store: { dispatch } }) => {
      return dispatch(actions.getfetch());
    }
  }
])
@connect(mapStateToProps, mapDispatchToProps)
class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div>
        <header>Site title</header>
        {this.props.data.map(f => {
          return (
            <p key={f.id}>{f.title}</p>
          )
        })}
        <footer>Site footer</footer>
      </div>
    )
  }
}

export default AppComponent;