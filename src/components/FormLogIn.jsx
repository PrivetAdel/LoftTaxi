import React from 'react';
import {Typography, InputLabel, Input, Link} from '@material-ui/core';
import {FormContainer} from './FormContainer';
import {Form} from './Form';
import {SubmitButton} from './SubmitButton';
import {AuthorizationContecxt} from './AuthorizationContecxt';
import {makeStyles} from '@material-ui/core/styles';
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

const FormLogin = ({onSignUp, onSubmit}) => {
  const classes = useStyles();
  const {login} = React.useContext(AuthorizationContecxt);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const emailChangeHandle = (evt) => {
    setEmail(evt.target.value);
  }

  const passwordChangeHandle = (evt) => {
    setPassword(evt.target.value);
  }

  const submitFormHandler = (evt) => {
    evt.preventDefault();
    login(email, password);
    onSubmit();
  }

  const forgotPasswordHandler = (evt) => {
    evt.preventDefault();
    console.log('forgot password');    
  }

  return (
    <FormContainer>
      <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
        Войти
      </Typography>

      <Form onSubmitHandler={submitFormHandler} >

        <InputLabel htmlFor="email" className={classes.label} >Email</InputLabel>
        <Input
          type="text"
          id="email"
          value={email}
          placeholder="mail@mail.ru"
          onChange={emailChangeHandle}
          fullWidth
          required />

        <InputLabel htmlFor="password" className={classes.label} >Пароль</InputLabel>
        <Input
          type="text"
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
  onSignUp: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

FormLogin.defaultProps = {
  onSignUp: () => {},
  onSubmit: () => {}
};

export default FormLogin;