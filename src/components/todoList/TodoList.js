import { useSelector } from 'react-redux';
import TodoItem from './todoItem/TodoItem';
import FooterFilter from '../footerFilter/FooterFilter';
import classes from './todoList.module.scss';

const TodoList = () => {
    const theme = useSelector(state => state.theme)
    const todos = useSelector(state => state.todo.todos);

    return (
      <div className={`${classes.todoList} ${theme === 'black' ? classes.themeBlack : classes.themeWhite}`}>
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item}/>
          ))}
          <FooterFilter/>
      </div>
    );
};

export default TodoList;