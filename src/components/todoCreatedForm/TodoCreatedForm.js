import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodoItem } from '../../store/reducers/todoReducer';
import classes from './TodoCreatedForm.module.scss'

const TodoCreatedForm = () => {
    const [valueTitle, setValueTitle] = useState('');
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch();

    const addTodo = () => {
        if(valueTitle) {
            dispatch(createTodoItem(valueTitle));
            setValueTitle('')
        }
    };
    return (
      <div className={`${classes.form}  ${theme === 'black' ? classes.themeBlack : classes.themeWhite}`}>
          <input type="text" value={valueTitle}
                 onChange={(e) => setValueTitle(e.target.value)}
                 className={classes.input}
                 onKeyPress={(key) => {
                     if(key.code === 'Enter') {
                         addTodo()
                     }
                 }}
                 placeholder={'Create a new todo...'}
          />
      </div>
    );
};

export default TodoCreatedForm;