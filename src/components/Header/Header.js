import classes from './Header.module.scss'
import { changeTheme } from '../../store/reducers/ThemeReducer/Theme.reducer';
import { useDispatch, useSelector } from 'react-redux';
import moon from '../../assets/images/moon.svg'
import sun from '../../assets/images/sun.svg'

const Header = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)

    const changeThm = () => dispatch(changeTheme())

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