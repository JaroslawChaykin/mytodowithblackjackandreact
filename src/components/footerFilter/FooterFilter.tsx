import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { backLogCounter, isPhone } from '../../utils';
import classes from './FooterFilter.module.scss';
import {changeQuery, deleteAllCompletedTodoItem} from '../../store/reducers/TodosReducer/Todos.actions';

const FooterFilter: React.FC = () => {
    const {todos, query} = useSelector(state => state.todo);
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const deleteAllCheckedTodo = () => dispatch(deleteAllCompletedTodoItem());
    const queryCreated = (event: any) => dispatch(changeQuery(event.target.innerText));
    const currentThemes = theme === 'black' ? classes.themeBlack : classes.themeWhite;

    if (!todos.length) {
        return <div className={`${classes.footerFilter} ${classes.br} ${currentThemes}`}
                    style={{paddingLeft: '70px'}}>Empty</div>;
    }
    const buttonOfSelector = ['All', 'Active', 'Completed']

    const componentSelectors = () => {
        return buttonOfSelector.map(item => (
            <button key={item} className={query === `${item}` ? classes.active : ''}
                    onClick={(e) => queryCreated(e)}>{item}
            </button>
          ))
    };

    return (
      <div>
          <div className={`${classes.footerFilter} ${currentThemes}`}>
              <div className={classes.todoLeft}>
                  {backLogCounter(todos)} items left
              </div>
              <div className={classes.filterList}>
                  {!isPhone && componentSelectors()}
              </div>
              <div className={classes.clear}>
                  <button onClick={deleteAllCheckedTodo}>Clear completed</button>
              </div>
          </div>
          {
            isPhone &&
            <div className={`${classes.footerFilter} ${classes.footerFilterPhone} ${currentThemes}`}>
                {componentSelectors()}
            </div>
          }
      </div>
    );
};

export default FooterFilter;