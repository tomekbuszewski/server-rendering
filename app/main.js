import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {getState} from 'redux';

import store from './store';

import App from './Components/App';

render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('app')
);