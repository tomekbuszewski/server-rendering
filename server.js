require('babel-register');

import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { getState } from 'redux';

import store from './app/store';

import App from './app/Components/App';

const app = express();

const currentStore = store.getState();
const port = 666;

app.get('/', (req, res) => {
  const body = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  res.send(`<!DOCTYPE html>
<html>
  <head>
    <title>React</title>
  </head>
  <body>
  <div id="app">${body}</div>
  <script>window.__PRELOADED_STATE__ = ${JSON.stringify(currentStore)}</script>
  
  </body>
</html>`);
});

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/data', express.static(path.join(__dirname, 'data')));

app.listen(port);
console.log(`localhost:${port}`);