import React from 'react';
import FormLogIn from './FormLogIn';
import FormSignUp from './FormSignUp';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import mapBackground from '../../assets/map.png';
import logoPic from '../../assets/logo-pic.svg';
import logoText from '../../assets/logo-text.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    flexDirection: 'column',

    [theme.breakpoints.up('tablet')]: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
    }
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    backgroundColor: 'black',
    '& img': {
      margin: '4px'
    },

    [theme.breakpoints.up('tablet')]: {
      maxWidth: '30%',
      flexGrow: 1,
      '& img': {
        margin: '8px'
      },
    }
  },
  rightSide: {
    alignItems: 'stretch',
    flexGrow: 1,

    [theme.breakpoints.up('tablet')]: {
      backgroundImage: `url(${mapBackground})`,
      maxWidth: '70%',
      minHeight: '100vh',
      alignItems: 'center',
    },
  },
  logoPic: {
    [theme.breakpoints.up('laptop')]: {
      width: '140px',
      height: '140px'
    },
  }
}));

const LoginPage = () => {
  const [activeForm, setActiveForm] = React.useState(true);
  const isLoggedIn = useSelector(({authReducer}) => authReducer.isLoggedIn);
  const classes = useStyles();
  
  const onToggleForm = () => {
    setActiveForm((state) => !state);
  };

  return (
    <Grid container className={classes.root} >
      <Grid container item direction="column" justify="center" className={classes.leftSide} >
        <img width="80" height="80" alt="loft-taxi logo-pic" src={logoPic} className={classes.logoPic} />
        <img width="192" height="36" alt="loft-taxi logo-text" src={logoText} />
      </Grid>

      <Grid container item justify="center" className={classes.rightSide} >
        { 
          isLoggedIn ? <Redirect to="/main" /> :
          (activeForm ? <FormLogIn onSignUp={onToggleForm} /> : <FormSignUp onLogIn={onToggleForm} />)
        }
      </Grid>
    </Grid>
  );
};

export default LoginPage;
