import React from 'react';
import classes from './BgImage.module.scss';
import bg from '../../assets/images/bg.webp'
import { useSelector } from 'react-redux';

const BgImage = ({children}) => {

    const theme = useSelector(state => state.theme)

    return (
      <div className={`${classes.bgImage} ${theme === 'black' ? classes.themeBlack : classes.themeWhite}`}>
          <div className={classes.image}>
              <img src={bg} alt="bg"/>
          </div>
          <div className={classes.blackBg}>
              <div className={classes.content}>
                  {children}
              </div>
          </div>
      </div>
    );
};

export default BgImage;