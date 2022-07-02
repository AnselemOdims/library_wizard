import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// combine one or more reducers
const reducer = combineReducers({
});

// create the store
const store = createStore(reducer, applyMiddleware(logger));

export default store;
