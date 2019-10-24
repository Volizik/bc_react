import { SET_MY_INFO } from './constants';

export const initialState = {
    login: '',
    id: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_INFO:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
