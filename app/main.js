import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { match } from 'react-router'

match({ routes, location: '/' }, () => {
  render(routes, document.getElementById('app'))
});

// render(
//   routes,
//   document.getElementById('app')
// );