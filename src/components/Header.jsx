import React, {useCallback} from 'react';
import {AppBar, MenuList, MenuItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link, NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/actions';
import useWindowSize from '../hooks';
import logoPic from '../assets/logo-pic.svg';
import logoText from '../assets/logo-text.svg';
import menuButton from '../assets/menu-button.svg';
import menuCloseButton from '../assets/menu-close-button.svg';
import menuIconLogout from '../assets/import.svg';
import menuIconMap from '../assets/pin.svg';
import menuIconProfile from '../assets/profile.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    flexDirection: 'column',
    height: '100%',

    [theme.breakpoints.up('tablet')]: {
      background: 'black',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0 30px',
      height: 'auto',
    }
  },
  logo: {
    display: 'none',

    [theme.breakpoints.up('tablet')]: {
      display: 'flex',
      alignItems: 'center',
      '& img': {
        margin: '8px'
      }
    }
  },
  nav: {
    [theme.breakpoints.up('tablet')]: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
    }
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',

    [theme.breakpoints.up('tablet')]: {
      color: 'white',
    }
  },
  active: {
    color: '#fdbf5a'
  },
  openButton: {
    position: 'absolute',
    zIndex: 5,
    top: '10px',
    left: '10px',
    border: 'none',
    backgroundColor: 'transparent',

    [theme.breakpoints.up('tablet')]: {
      display: 'none'
    }
  },
  closeButton: {
    position: 'absolute',
    zIndex: 5,
    top: '18px',
    right: '18px',
    border: 'none',
    backgroundColor: 'transparent',

    [theme.breakpoints.up('tablet')]: {
      display: 'none'
    }
  },
  icon: {
    margin: '5px'
  }
}));

const activePage = (match, location) => {
  if (!match) {
    return false;
  }
  return match.url === "/main" && location.pathname !== "/main/profile"
};

const Header = () => {
  const size = useWindowSize();
  const [isOpen, setOpen] = React.useState(true);
  const dispatch = useDispatch();
  const classes = useStyles();

  const toggleMenuHandler = () => {
    if(size.width < 768) {
      setOpen((state) => !state);
    }

    return;
  };

  const logoutHandler = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <>
      <button className={classes.openButton} onClick={toggleMenuHandler}>
        <img width="20" height="20" src={menuButton} alt="menu-button" />
      </button>
      {
        isOpen ? (
          <AppBar className={classes.root} >
            <Link className={classes.logo} to="/main" >
              <img width="61" height="61" src={logoPic} alt="loft-taxi logo-pic"/>
              <img width="196" height="32" src={logoText} alt="loft-taxi logo-text"/>
            </Link>

            <MenuList className={classes.nav}>
              <MenuItem >
                <img width="15" height="15" alt="menu-icon" src={menuIconMap} className={classes.icon} />
                <NavLink 
                  to="/main" 
                  isActive={(match, location) => activePage(match, location)} 
                  className={classes.navLink}
                  onClick={toggleMenuHandler}
                  activeClassName={classes.active} >
                  Карта
                </NavLink>
              </MenuItem>

              <MenuItem >
                <img width="15" height="15" alt="menu-icon" src={menuIconProfile} className={classes.icon} />
                <NavLink 
                  to="/main/profile" 
                  className={classes.navLink}
                  onClick={toggleMenuHandler}
                  activeClassName={classes.active} >
                  Профиль
                </NavLink>
              </MenuItem>

              <MenuItem >
                <img width="15" height="15" alt="menu-icon" src={menuIconLogout} className={classes.icon} />
                <NavLink 
                  to="/login" 
                  onClick={logoutHandler}
                  className={classes.navLink}
                  activeClassName={classes.active} >
                  Выйти
                </NavLink>
              </MenuItem>
              
            </MenuList>

            <button className={classes.closeButton} onClick={toggleMenuHandler}>
              <img width="20" height="20" src={menuCloseButton} alt="menu-close-button" />
            </button>
          </AppBar>
        ) : ''
      }
    </>
  );
};

export default Header;
