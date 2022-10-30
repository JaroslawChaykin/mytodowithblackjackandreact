import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../store/reducers/ThemeReducer/Theme.actions';
import moon from '../../assets/images/moon.svg';
import sun from '../../assets/images/sun.svg';
import classes from './Header.module.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const changeThm = () => dispatch(changeTheme());

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>TODO</h1>
      <div className={classes.themeImage} onClick={changeThm}>
        <img src={theme === 'black' ? sun : moon} alt="theme"/>
      </div>
    </div>
  );
};

export default Header;