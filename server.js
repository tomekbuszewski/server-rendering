require('babel-register');

import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server'
import { match } from 'react-router'
import { ReduxAsyncConnect, loadOnServer, reducer as reduxAsyncConnect } from 'redux-connect'
import { Provider } from 'react-redux';

import routes from './app/routes';
import store from './app/store';

const app  = express();
const port = 3100;

const createPage = (html) => {
  return `<!doctype html>
    <html>
      <head>
        <title>123</title>
      </head>
      <body>
        <div id="app">${html}</div>
        
        <script src="/public/index.js"></script>
      </body>
    </html>`
};

app.get('/', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, renderProps) => {
    loadOnServer({ ...renderProps, store }).then(() => {
      const appHTML = renderToString(
        <Provider store={store} key="provider">
          <ReduxAsyncConnect {...renderProps} />
        </Provider>
      );

      const html = createPage(appHTML);
      res.send(html);
    }).catch((e) => { console.log(e); })
  })
});

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/data', express.static(path.join(__dirname, 'data')));

app.listen(port);
console.log(`localhost:${port}`);