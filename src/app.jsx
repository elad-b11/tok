import ReactDOM from 'react-dom';
import React from 'react';
import Home from './components/Home.jsx';
import './index.scss';
import initialState from './initialState.js';
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';

const store = configureStore(initialState);

ReactDOM.render(<Provider store={store}>
                    <AppContainer>
                        <Home/>        
                    </AppContainer>
                </Provider>,document.getElementById("app"));