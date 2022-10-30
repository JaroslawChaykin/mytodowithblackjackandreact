import React from 'react';
import { useSelector } from 'react-redux';
import classes from './BgImage.module.scss';
import bg from '../../assets/images/bg.webp'

const BgImage: React.FC = ({children}) => {

    const theme = useSelector(state => state.theme)
    const currentThemes = theme === 'black' ? classes.themeBlack : classes.themeWhite;

    return (
      <div className={`${classes.bgImage} ${currentThemes}`}>
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