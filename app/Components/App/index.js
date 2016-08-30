import React from 'react';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';

import actions from './actions';

@asyncConnect([ {
  promise: ({ store: { dispatch } }) => {
    // `fetch` is your redux action returning a promise
    return dispatch(actions.fetch());
  }
} ])
@connect(
  state => ({
    // At this point, you can access your redux data as the
    // fetch will have finished
    data: state.AppState.data
  })
)
class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.props = props;

    console.log(props);
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
        <div>
          {this.props.AppState.data.map(f => {
            return (
                <p key={f.id}>{f.title}</p>
            )
          })}
        </div>
    )
  }
}

export default AppComponent;