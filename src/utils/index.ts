import {TodoType} from '../store/reducers/TodosReducer/Todos.types';

export const backLogCounter = (todos: TodoType[]) => {
    let i = 0
    todos.forEach(item => !item.checked && i++ )
    return i
}
export const isPhone = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));