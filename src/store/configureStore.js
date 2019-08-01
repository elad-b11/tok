import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/rootReducer.js';
import thunk from 'redux-thunk';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialStore) {
    return createStore(rootReducer, 
                       initialStore,
                       applyMiddleware(thunk));
}