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

const useStyles = makeStyles(() => ({
  root: {
    flexWrap: 'nowrap'
  },
  rightSide: {
    maxWidth: '70%',
    minHeight: '100vh',
    alignItems: 'center',
    backgroundImage: `url(${mapBackground})`
  },
  leftSide: {
    maxWidth: '30%',
    backgroundColor: 'black',
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    '& img': {
      margin: '8px'
    }
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
    <Grid container direction="row" className={classes.root} >
      <Grid container item direction="column" justify="center" className={classes.leftSide} >
        <img width="140" height="140" alt="loft-taxi logo-pic" src={logoPic} />
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
