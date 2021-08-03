import {
    applyMiddleware,
    createStore,
} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import {initialState} from './config/consts';


const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunkMiddleware));

export default store;
