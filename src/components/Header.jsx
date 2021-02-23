import React from 'react';
import {AppBar, MenuList, Link, MenuItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
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

const Header = ({onClickPage}) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} >

      <Link className={classes.logo} href="#">
        <img width="61" height="61" src={logoPic} alt="loft-taxi logo-pic"/>
        <img width="196" height="32" src={logoText} alt="loft-taxi logo-text"/>
      </Link>

      <MenuList className={classes.nav}>
        <MenuItem >
          <Link onClick={onClickPage} name="MapPage" href="#">Карта</Link>
        </MenuItem>

        <MenuItem >
          <Link onClick={onClickPage} name="ProfilePage" href="#">Профиль</Link>
        </MenuItem>

        <MenuItem >
          <Link onClick={onClickPage} name="LoginPage" href="#">Выйти</Link>
        </MenuItem>
        
      </MenuList>
    </AppBar>
  );
};

export default Header;