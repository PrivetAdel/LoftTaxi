import React, {useCallback} from 'react';
import {Typography, InputLabel, Input, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {FormContainer, Form, SubmitButton} from '../../components';
import {logIn} from '../../redux/actions';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    margin: theme.spacing(1, 0, 2)
  },
  label: {
    marginTop: theme.spacing(3)
  },
  link: {
    color: '#828282'
  },
}));

const FormLogin = ({onSignUp}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const emailChangeHandle = (evt) => {
    setEmail(evt.target.value);
  }

  const passwordChangeHandle = (evt) => {
    setPassword(evt.target.value);
  }

  const loginHandler = useCallback((email, password) => {
    dispatch(logIn(email, password));
  }, []);

  const submitFormHandler = (evt) => {
    evt.preventDefault();
    loginHandler(email, password);
  }

  const forgotPasswordHandler = (evt) => {
    evt.preventDefault();
    console.log('forgot password');    
  }

  return (
    <FormContainer maxWidth="sm" padding="8, 12" >
      <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
        Войти
      </Typography>

      <Form onSubmitHandler={submitFormHandler} >

        <InputLabel htmlFor="email" className={classes.label} >Email</InputLabel>
        <Input
          type="email"
          id="email"
          value={email}
          placeholder="mail@mail.ru"
          onChange={emailChangeHandle}
          fullWidth
          required />

        <InputLabel htmlFor="password" className={classes.label} >Пароль</InputLabel>
        <Input
          type="password"
          id="password"
          value={password}
          placeholder="*************"
          onChange={passwordChangeHandle}
          fullWidth
          required />
        
        <Typography align="right" className={classes.label} >
          <Link onClick={forgotPasswordHandler} className={classes.link}>Забыли пароль?</Link>
        </Typography>
        
        <SubmitButton>Войти</SubmitButton>
      
        <Typography color="textSecondary" align="center">
          Новый пользователь? 
          <Link onClick={onSignUp}>
            Регистрация
          </Link>
        </Typography>
      </Form>
    </FormContainer>
  );
};

FormLogin.propTypes = {
  onSignUp: PropTypes.func.isRequired
};

FormLogin.defaultProps = {
  onSignUp: () => {}
};

export default FormLogin;
