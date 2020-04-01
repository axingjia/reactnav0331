import {createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import {ROOT} from '../shared/knarytree.js';
import {Root} from './treereducer.js';
// import { Reducer, initialState } from './reducer';



export const ConfigureStore = () => {
    const store = createStore(
       //  Reducer, // reducer
       // initialState, // our initialState
        // combineReducers({
        //     root:Root
        // }),
        Root
         // applyMiddleware(thunk, logger)
    );

    return store;
}