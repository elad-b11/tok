import ReactDOM from 'react-dom';
import React from 'react';
import initialState from './initialState.js';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
import GananotRouter from './Router.js';

import './index.scss';

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <GananotRouter />
    </Provider>,
    document.getElementById("app"));