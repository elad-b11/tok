import layersApi from '../api/layersApi.js';
import types from './actionTypes.js';

export default {
    getLayersTree() {
        return async (dispatch) => {
            try {
                dispatch({type:types.getLayersTreeStart});
                let layers = await layersApi.getLayersTree();
                dispatch({type: types.getLayersTreeEnd, layers});
            } catch(ex) {
                dispatch({type: types.getLayersTreeError, errMsg:ex});
            }  
        };
    },
    getLayerById(id) {
        return async (dispatch) => {
            try {
                dispatch({type:types.getLayerByIdStart});
                let layer = await layersApi.getLayerById(id);
                dispatch({type: types.getLayerByIdEnd, layer});
            } catch(ex) {
                dispatch({type: types.getLayerByIdError, errMsg:ex});
            }  
        };
    },
    cancelLayerOparation() {
        return {type: types.operationCancel};
    }
};