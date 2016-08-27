import React from 'react';

const AppComponent = (props) => {
  return (
    <div>
      {props.AppState.data.map(f => {
        return (<p key={f.id}>{f.title}</p>)
      })}
    </div>
  )
};

export default AppComponent;