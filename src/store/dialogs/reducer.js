import { SET_DIALOGS_LIST, SET_USERS_LIST } from './constants';

export const initialState = {
    list: [],
    users: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_LIST:
            return {
                ...state,
                users: action.payload
            };
        case SET_DIALOGS_LIST:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};
