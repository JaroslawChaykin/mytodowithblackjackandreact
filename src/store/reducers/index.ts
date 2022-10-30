import {combineReducers} from 'redux';
import { todosReducer } from './TodosReducer/Todos.reducer';
import { themeReducer } from './ThemeReducer/Theme.reducer';

export const rootReducers = combineReducers({
    todo: todosReducer,
    theme: themeReducer
})