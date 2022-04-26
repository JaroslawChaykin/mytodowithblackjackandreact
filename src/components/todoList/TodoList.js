import { useSelector } from 'react-redux';
import TodoItem from './todoItem/TodoItem';
import FooterFilter from '../footerFilter/FooterFilter';
import classes from './todoList.module.scss';
import { useState } from 'react';

const TodoList = () => {
    const theme = useSelector(state => state.theme)
    const todos = useSelector(state => state.todo.todos);
    const [query, setQuery] = useState('All');

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
      <div className={`${classes.todoList} ${theme === 'black' ? classes.themeBlack : classes.themeWhite}`}>
          {sortedTodos(query).map((item) => (
            <TodoItem key={item.id} todo={item}/>
          ))}
          <FooterFilter setQuery={setQuery} query={query}/>
      </div>
    );
};

export default TodoList;