require('babel-register');

import express from 'express';
import path from 'path';

import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import { ReduxAsyncConnect, loadOnServer, reducer as reduxAsyncConnect } from 'redux-connect'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import routes from './app/routes';
import store from './app/store';

const app  = express();
const port = 3000;

const createPage = (html, store) => {
  return `
    <!doctype html>
    <html>
      <body>
        <div id="app">${html}</div>

        <!-- its a Redux initial data -->
        <script dangerouslySetInnerHTML={{__html: ${window.__data = JSON.stringify(store.getState())} />
      </body>
    </html>
  `
};

app.get('/', (req, res) => {
  res.send(`
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                         <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  
<div id="app"></div>
<script src="/public/index.js"></script>
</body>
</html>
`);
  // match({ routes, location: req.url }, (err, redirect, renderProps) => {
  //   // 1. load data
  //   loadOnServer({ ...renderProps, store }).then(() => {
  //
  //     // 2. use `ReduxAsyncConnect` instead of `RoutingContext` and pass it `renderProps`
  //     const appHTML = renderToString(
  //       <Provider store={store} key="provider">
  //         <ReduxAsyncConnect {...renderProps} />
  //       </Provider>
  //     )
  //
  //     // 3. render the Redux initial data into the server markup
  //     const html = createPage(appHTML, store)
  //     res.send(html)
  //   })
  // })
})

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/data', express.static(path.join(__dirname, 'data')));

app.listen(port);
console.log(`localhost:${port}`);