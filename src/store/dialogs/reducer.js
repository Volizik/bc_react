import { SET_DIALOGS_LIST } from './constants';

export const initialState = {
    list: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS_LIST:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};
