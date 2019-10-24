import { SET_DIALOGS_LIST, SET_USERS_LIST } from './constants'

export const setDialogsList = (payload) => ({
    type: SET_DIALOGS_LIST,
    payload,
});

export const setUsersList = (payload) => ({
    type: SET_USERS_LIST,
    payload,
});

