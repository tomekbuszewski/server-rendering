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

    this.smile = this.smile.bind(this);

    this.props = props;
  }

  render() {
    return (
      <div>
        {this.props.data.map(f => {
          return (
            <p key={f.id}>{f.title}</p>
          )
        })}
      </div>
    )
  }
}

export default AppComponent;