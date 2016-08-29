import React from 'react';
import { asyncConnect } from 'redux-connect';

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    return dispatch(fetch());
  }
}])

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

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