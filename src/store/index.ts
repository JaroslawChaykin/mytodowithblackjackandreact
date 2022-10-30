import { createStore } from 'redux';
import { rootReducers } from './reducers';
import {composeWithDevTools} from '@redux-devtools/extension';


export const store = createStore(rootReducers, composeWithDevTools())