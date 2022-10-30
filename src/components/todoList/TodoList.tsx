import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todoItem/TodoItem';
import classes from './todoList.module.scss';

const TodoList: React.FC = () => {
    const theme = useSelector(state => state.theme)
    const { todos, query } = useSelector(state => state.todo);
    const currentThemes = theme === 'black' ? classes.themeBlack : classes.themeWhite;

    const sortedTodos = (query) => {
        switch (query) {
            case "Active":
                return todos.filter((item) => !item.checked);
            case "Completed":
                return todos.filter((item) => item.checked);
            default:
                return todos
        }
    }

    return (
      <div className={`${classes.todoList} ${currentThemes}`}>
          {sortedTodos(query).map((item) => (
            <TodoItem key={item.id} todo={item}/>
          ))}
      </div>
    );
};

export default TodoList;
