import classes from './Header.module.scss'
const Header = () => {
    return (
      <div className={classes.header}>
            <h1 className={classes.title}>TODO</h1>
      </div>
    );
};

export default Header;