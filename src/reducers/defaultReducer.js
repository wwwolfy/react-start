import * as actionTypes from '../actionTypes';

const initialState = {
    test: null,
};

const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_DATA: {
            state = {
                ...state,
                test: action.payload,
            }
        }
    }
    return state;
};

export default defaultReducer;