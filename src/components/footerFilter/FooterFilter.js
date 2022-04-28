import { useDispatch, useSelector } from 'react-redux';
import { changeQuery, deleteAllCompletedTodoItem } from '../../store/reducers/todoReducer';
import { backLogCounter, isPhone } from '../../utils';
import classes from './FooterFilter.module.scss';

const FooterFilter = () => {
    const todos = useSelector(state => state.todo.todos);
    const theme = useSelector(state => state.theme);
    const query = useSelector(state => state.todo.query);
    const dispatch = useDispatch();
    const deleteAllCheckedTodo = () => dispatch(deleteAllCompletedTodoItem());
    const queryCreated = (event) => dispatch(changeQuery(event.target.innerText));
    const currentThemes = theme === 'black' ? classes.themeBlack : classes.themeWhite;

    if (!todos.length) {
        return <div className={`${classes.footerFilter} ${classes.br} ${currentThemes}`}
                    style={{paddingLeft: '70px'}}>Empty</div>;
    }

    const componentToPhone = () => {
        return (
          <div className={classes.filterList}>
              <button className={query === 'All' ? classes.active : ''}
                      onClick={(e) => queryCreated(e)}>All
              </button>
              <button className={query === 'Active' ? classes.active : ''}
                      onClick={(e) => queryCreated(e)}>Active
              </button>
              <button className={query === 'Completed' ? classes.active : ''}
                      onClick={(e) => queryCreated(e)}>Completed
              </button>
          </div>
        );
    };
    return (
      <div>
          <div className={`${classes.footerFilter} ${currentThemes}`}>
              <div className={classes.todoLeft}>
                  {backLogCounter(todos)} items left
              </div>
              {!isPhone && componentToPhone()}
              <div className={classes.clear}>
                  <button onClick={deleteAllCheckedTodo}>Clear completed</button>
              </div>
          </div>
          {
            isPhone &&
            <div className={`${classes.footerFilter} ${classes.footerFilterPhone} ${currentThemes}`}>
                {componentToPhone()}
            </div>
          }
      </div>
    );
};

export default FooterFilter;