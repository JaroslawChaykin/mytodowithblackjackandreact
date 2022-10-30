import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createTodoItem} from '../../store/reducers/TodosReducer/Todos.actions';
import classes from './TodoCreatedForm.module.scss'

const TodoCreatedForm: React.FC = () => {
    const [valueTitle, setValueTitle] = useState('');
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch();
    const currentThemes = theme === 'black' ? classes.themeBlack : classes.themeWhite;

    const addTodo = () => {
        if(valueTitle) {
            dispatch(createTodoItem(valueTitle));
            setValueTitle('')
        }
    };
    return (
      <div className={`${classes.form}  ${currentThemes}`}>
          <div className={classes.createBtn} onClick={addTodo}></div>
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