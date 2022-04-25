import { useSelector } from 'react-redux';
import { backLogCounter } from '../../utils';
import classes from './FooterFilter.module.scss'

const FooterFilter = () => {
    const todos = useSelector(state => state.todo.todos);
    const theme = useSelector(state => state.theme)

    if (!todos.length) {
        return <div className={`${classes.footerFilter} ${theme === 'black' ? classes.themeBlack : classes.themeWhite}`} style={{paddingLeft: '70px'}}>Empty</div>
    }

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
            <button>Clear completed</button>
        </div>
      </div>
    );
};

export default FooterFilter;