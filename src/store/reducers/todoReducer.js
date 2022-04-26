const initialState = {
    todos: []
};

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const DELETE_ALL_COMPLETED_TODO = 'DELETE_ALL_COMPLETED_TODO';
const CHECK_TODO = 'CHECK_TODO';

export const todoReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};

export const createTodoItem = (name) => ({type: ADD_TODO, payload: {name: name, id: Date.now(), checked: false}});
export const deleteTodoItem = (id) => ({type: DELETE_TODO, payload: id});
export const deleteAllCompletedTodoItem = (id) => ({type: DELETE_ALL_COMPLETED_TODO});
export const checkTodoItem = (id) => ({type: CHECK_TODO, payload: id});