export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_COMPLETED_TODO = 'DELETE_ALL_COMPLETED_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const CHANGE_QUERY = 'CHANGE_QUERY';

export const createTodoItem = (name: string) => ({type: ADD_TODO, payload: {name: name, id: Date.now(), checked: false}});
export const deleteTodoItem = (id: number) => ({type: DELETE_TODO, payload: id});
export const deleteAllCompletedTodoItem = () => ({type: DELETE_ALL_COMPLETED_TODO});
export const checkTodoItem = (id: number) => ({type: CHECK_TODO, payload: id});
export const changeQuery = (query: string) => ({type: CHANGE_QUERY, payload: query});