require('babel-register');

import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { getState } from 'redux';
import { match, RouterContext } from 'react-router'

import routes from './app/routes';
import store from './app/store';

const app = express();
const port         = 3100;

app.get('/', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (renderProps) {
      res.send(`<div id="app">${renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )}</div>`)
    } else {
      console.log('err')
    }
  });
});

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/data', express.static(path.join(__dirname, 'data')));

app.listen(port);
console.log(`localhost:${port}`);