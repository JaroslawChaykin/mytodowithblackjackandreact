import { useDispatch, useSelector } from 'react-redux';
import { checkTodoItem, deleteTodoItem } from '../../../store/reducers/todoReducer';
import { memo } from 'react';
import check from '../../../assets/images/check.svg'
import { isPhone } from '../../../utils';
import close from '../../../assets/images/close.svg'
import classes from './TodoItem.module.scss';

const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme)

    const deleteTodo = (id) => dispatch(deleteTodoItem(id));
    const checkTodo = (id) => dispatch(checkTodoItem(id));
    return (
      <div className={`${classes.item } ${theme === 'black' ? classes.themeBlack : classes.themeWhite}`}>
          <label className={classes.checkboxSecond}>
              <input type="checkbox" checked={todo.checked} onChange={() => checkTodo(todo.id)}/>
              <div className={classes.checkBoxText}>
                  <img src={check} alt=""/>
              </div>
          </label>
          <div className={`${classes.name} ${todo.checked ? classes.checked : ''}`}
               onDoubleClick={() => !isPhone ? deleteTodo(todo.id) : ''}>
              {todo.name}
          </div>
          <button className={`${classes.phone} ${isPhone ? classes.isPhone : ''}`}
                  onClick={() => deleteTodo(todo.id)}>
              <img src={close} alt=""/>
          </button>
      </div>
    );
}

export default memo(TodoItem);