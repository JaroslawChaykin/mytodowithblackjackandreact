import { useSelector } from 'react-redux';
import TodoItem from './todoItem/TodoItem';
import FooterFilter from '../footerFilter/FooterFilter';
import classes from './todoList.module.scss';

const TodoList = () => {

    const todos = useSelector(state => state.todo.todos);

    return (
      <div className={classes.todoList}>
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item}/>
          ))}
          <FooterFilter/>
      </div>
    );
};

export default TodoList;