import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import taskHandler from './reducers';

const createStoreMiddleware=applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);

export const configureStore=()=>
(createStoreMiddleware(taskHandler));
