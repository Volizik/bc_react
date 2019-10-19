import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';

import { reducer as dialogReducer } from './dialogs';

export const rootReducer = combineReducers({
    dialog: dialogReducer,
});

export const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
