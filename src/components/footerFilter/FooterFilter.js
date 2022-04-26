import { useDispatch, useSelector } from 'react-redux';
import { deleteAllCompletedTodoItem } from '../../store/reducers/todoReducer';
import { backLogCounter } from '../../utils';
import classes from './FooterFilter.module.scss';

const FooterFilter = ({setQuery, query}) => {
    const todos = useSelector(state => state.todo.todos);
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const deleteAllCheckedTodo = () => dispatch(deleteAllCompletedTodoItem());

    if (!todos.length) {
        return <div className={`${classes.footerFilter} ${theme === 'black' ? classes.themeBlack : classes.themeWhite}`}
                    style={{paddingLeft: '70px'}}>Empty</div>;
    }

    const queryCreated = (event) => {
        setQuery(event.target.innerText)
    };

    return (
      <div className={`${classes.footerFilter} ${theme === 'black' ? classes.themeBlack : classes.themeWhite}`}>
          <div className={classes.todoLeft}>
              {backLogCounter(todos)} items left
          </div>
          <div className={classes.filterList}>
              <button className={query === 'All' ? classes.active : ''}
                      onClick={(e) => queryCreated(e)}>All</button>
              <button className={query === 'Active' ? classes.active : ''}
                      onClick={(e) => queryCreated(e)}>Active</button>
              <button className={query === 'Completed' ? classes.active : ''}
                      onClick={(e) => queryCreated(e)}>Completed</button>
          </div>
          <div className={classes.clear}>
              <button onClick={deleteAllCheckedTodo}>Clear completed</button>
          </div>
      </div>
    );
};

export default FooterFilter;