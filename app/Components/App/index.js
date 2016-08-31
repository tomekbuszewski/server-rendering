import React from 'react';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';

import actions from './actions';

@asyncConnect([ {
  key: 'fetch',
  promise: ({ store: { dispatch } }) => {
    return dispatch(actions.getfetch());
  }
} ])
@connect(
  state => ({
    data: state.AppState.data
  })
)
class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    // console.log(this.props.data);
  }

  render() {
    return (
        <div className="blah">
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