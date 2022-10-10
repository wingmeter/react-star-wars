import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from '../../context/ThemeProvider';

import imgDroid from './img/droid.png';
import imgSaber from './img/lightsaber.png';
import imgStation from './img/space-station.png';

import styles from './Header.module.css';

const Header = () => {
  const [icon, setIcon] = useState(imgDroid);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgSaber);
        break;
      case THEME_DARK:
        setIcon(imgStation);
        break;
      case THEME_NEUTRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgStation);
    }
  }, [isTheme]);
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="icons" />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
