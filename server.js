require('babel-register');

import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import store from './app/store';

import App from './app/Components/App';

const app = express();

app.get('/', (req, res) => {
  res.send(
    renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )
  );
});

app.listen(3000);