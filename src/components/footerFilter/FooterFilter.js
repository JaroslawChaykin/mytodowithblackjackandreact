import { useDispatch, useSelector } from 'react-redux';
import { backLogCounter } from '../../utils';
import classes from './FooterFilter.module.scss';
import { deleteAllCompletedTodoItem } from '../../store/reducers/todoReducer';

const FooterFilter = () => {
    const todos = useSelector(state => state.todo.todos);
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    if (!todos.length) {
        return <div className={`${classes.footerFilter} ${theme === 'black' ? classes.themeBlack : classes.themeWhite}`}
                    style={{paddingLeft: '70px'}}>Empty</div>;
    }
    const deleteAllCheckedTodo = () => {
        dispatch(deleteAllCompletedTodoItem())
    };

    return (
      <div className={`${classes.footerFilter} ${theme === 'black' ? classes.themeBlack : classes.themeWhite}`}>
          <div className={classes.todoLeft}>
              {backLogCounter(todos)} items left
          </div>
          <div className={classes.filterList}>
              <button className={classes.active}>All</button>
              <button>Archive</button>
              <button>Completed</button>
          </div>
          <div className={classes.clear}>
              <button onClick={deleteAllCheckedTodo}>Clear completed</button>
          </div>
      </div>
    );
};

export default FooterFilter;