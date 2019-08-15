import types from '../actions/actionTypes.js';
import initialState from '../initialState.js';

export default (state=initialState.layers, action) => {
    switch(action.type) {
        case types.getLayersTreeStart:
            return Object.assign({}, state, {isLoading: true});
        case types.getLayersTreeEnd:
            return Object.assign({}, state, {list: action.layers, isLoading:false});
        case types.getLayersTreeError:
            return Object.assign({}, state, {isLoading: false, err: action.errMsg});
        case types.getLayerByIdStart: 
            return Object.assign({}, state, {isLoading: true, currLayer: null});
        case types.getLayerByIdEnd: 
            return Object.assign({}, state, {isLoading: false, currLayer: action.layer}); 
        case types.getLayerByIdError: 
            return Object.assign({}, state, {isLoading: false, errMsg: action.errMsg}); 
        case types.operationCancel:
            return Object.assign({}, state, {isLoading: false, currLayer: null});
        default: 
            return state;
    }
};