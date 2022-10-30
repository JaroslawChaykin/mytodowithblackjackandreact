import {TodosStateType} from './Todos.types';
import {ADD_TODO, CHANGE_QUERY, CHECK_TODO, DELETE_ALL_COMPLETED_TODO, DELETE_TODO} from './Todos.actions';

const initialState: TodosStateType = {
    todos: [],
    query: 'All'
};

export const todosReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    action.payload,
                    ...state.todos
                ]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.filter((item) => item.id !== action.payload)
                ]
            };
        case CHECK_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.map((item) => item.id === action.payload ? {...item, checked: !item.checked} : item)
                ]
            };
        case DELETE_ALL_COMPLETED_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.filter((item) => !item.checked)
                ]
            };
        case CHANGE_QUERY:
            return {
                ...state,
                query: action.payload
            };
        default:
            return state;
    }
};