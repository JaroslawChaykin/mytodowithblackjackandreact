import { useSelector } from 'react-redux';
import TodoItem from './todoItem/TodoItem';
import classes from './todoList.module.scss';

const TodoList = () => {
    const theme = useSelector(state => state.theme)
    const todos = useSelector(state => state.todo.todos);
    const query = useSelector(state => state.todo.query);

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
      </div>
    );
};

export default TodoList;