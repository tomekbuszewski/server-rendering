import React from 'react';

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