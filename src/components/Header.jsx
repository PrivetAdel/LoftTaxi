import React, {useCallback} from 'react';
import {AppBar, MenuList, MenuItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link, NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/actions';
import logoPic from '../assets/logo-pic.svg';
import logoText from '../assets/logo-text.svg';

const useStyles = makeStyles({
  root: {
    background: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0 30px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      margin: '8px'
    }
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  }
});

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const logoutHandler = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <AppBar className={classes.root} >
      <Link className={classes.logo} to="/main" >
        <img width="61" height="61" src={logoPic} alt="loft-taxi logo-pic"/>
        <img width="196" height="32" src={logoText} alt="loft-taxi logo-text"/>
      </Link>

      <MenuList className={classes.nav}>
        <MenuItem >
          <NavLink to="/main" >Карта</NavLink>
        </MenuItem>

        <MenuItem >
          <NavLink to="/main/profile" >Профиль</NavLink>
        </MenuItem>

        <MenuItem >
          <NavLink onClick={logoutHandler} to="/login" >Выйти</NavLink>
        </MenuItem>
        
      </MenuList>
    </AppBar>
  );
};

export default Header;
