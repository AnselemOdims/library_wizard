import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import genreReducer from './reducers/genreReducer';
import stepReducer from './reducers/stepReducer';

// combine one or more reducers
const reducer = combineReducers({
  genre: genreReducer,
  step: stepReducer,
});

// create the store
const store = createStore(reducer, applyMiddleware(logger));

declare global {
  type RootState = ReturnType<typeof store.getState>
}

export default store;
