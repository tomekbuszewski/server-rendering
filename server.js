require('babel-register');

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { getState } from 'redux';

import store from './app/store';

import App from './app/Components/App';

const app = express();

const currentStore = store.getState();

app.get('/', (req, res) => {
  const body = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React</title>
      </head>
      <body>
      ${body}
      <script>window.__PRELOADED_STATE__ = ${JSON.stringify(currentStore)}</script>
      </body>
    </html>
`);
});

app.listen(3000);