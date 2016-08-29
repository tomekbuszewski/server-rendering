import React from 'react';
import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-connect'

@asyncConnect([ {
  key:     'lunch',
  promise: ({ params, helpers }) => Promise.resolve({ id: 1, name: 'Borsch' })
} ])

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
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