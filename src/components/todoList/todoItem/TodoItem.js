import { useDispatch } from 'react-redux';
import { checkTodoItem, deleteTodoItem } from '../../../store/reducers/todoReducer';
import classes from './TodoItem.module.scss';
import check from '../../../assets/images/check.svg'
import { memo } from 'react';

const TodoItem = memo(
  ({todo}) => {
      const dispatch = useDispatch();

      const deleteTodo = (id) => dispatch(deleteTodoItem(id));
      const checkTodo = (id) => dispatch(checkTodoItem(id));
      return (
        <div className={classes.item}>
            <label className={classes.checkboxSecond}>
                <input type="checkbox" checked={todo.checked} onChange={() => checkTodo(todo.id)}/>
                <div className={classes.checkBoxText}>
                    <img src={check} alt=""/>
                </div>
            </label>
            <div className={classes.name} onDoubleClick={() => deleteTodo(todo.id)}>
                {todo.name}
            </div>
        </div>
      );
  }
)

export default TodoItem;