import React from 'react';
import {AuthorizationContecxt} from './AuthorizationContecxt';
import {AppBar, MenuList, MenuItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import logoPic from '../assets/logo-pic.svg';
import logoText from '../assets/logo-text.svg';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';

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

const Header = ({onClickLogout}) => {
  const {isLoggedIn} = React.useContext(AuthorizationContecxt);
  const classes = useStyles();

  return (
    isLoggedIn ?
    <AppBar className={classes.root} >

      <Link className={classes.logo} to="/" exact>
        <img width="61" height="61" src={logoPic} alt="loft-taxi logo-pic"/>
        <img width="196" height="32" src={logoText} alt="loft-taxi logo-text"/>
      </Link>

      <MenuList className={classes.nav}>
        <MenuItem >
          <NavLink to="/" >Карта</NavLink>
        </MenuItem>

        <MenuItem >
          <NavLink to="/ProfilePage" >Профиль</NavLink>
        </MenuItem>

        <MenuItem >
          <NavLink onClick={onClickLogout} to="/LoginPage" >Выйти</NavLink>
        </MenuItem>
        
      </MenuList>
    </AppBar> 
    : null
  );
};

Header.propTypes = {
  onClickLogout: PropTypes.func
};

Header.defaultProps = {
  onClickLogout: () => {}
};

export default Header;