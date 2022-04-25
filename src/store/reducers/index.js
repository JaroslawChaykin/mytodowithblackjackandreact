import {combineReducers} from 'redux';
import { todoReducer } from './todoReducer';
import { changeThemeReducer } from './changeThemeReducer';

export const rootReducers = combineReducers({
    todo: todoReducer,
    theme: changeThemeReducer
})