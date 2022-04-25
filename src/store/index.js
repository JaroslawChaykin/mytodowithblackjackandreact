import { createStore } from 'redux';
import { rootReducers } from './reducers';

let devtools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;
export const store = createStore(rootReducers, devtools)