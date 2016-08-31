import React from 'react';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.id = 1;
    this.props.fetch(++this.id);
  }

  render() {
    return (
      this.props.state.AppState.data ?
      <div>
        {this.props.state.AppState.data.map(f => {
          return (
            <p key={f.id}>{f.title}</p>
          )
        })}
      </div> : ''
    )
  }
}

export default AppComponent;