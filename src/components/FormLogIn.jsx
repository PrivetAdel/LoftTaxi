import React from 'react';
import {Grid, Typography, Button, InputLabel, Input, Link} from '@material-ui/core';
import Form from './Form';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    color: '#828282'
  },
  button: {
    borderRadius: '70px', 
    padding: '9px 0',
    fontSize: '24px',
    margin: '46px 0 33px'
  }
});

const FormLogin = ({onSignUp, onSubmit}) => {
  const classes = useStyles();
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
    console.log('email: ', email, 'password: ', password);
    onSubmit();
  }

  const forgotPasswordHandler = (evt) => {
    evt.preventDefault();
    console.log('forgot password');    
  }

  return (
    <Form title={'Войти'} onSubmitHandler={submitFormHandler} >
      <Grid item sm={12} >
        <InputLabel htmlFor="email" >Email</InputLabel>
        <Input
          type="text"
          id="email"
          value={email}
          placeholder="mail@mail.ru"
          onChange={emailChangeHandle}
          fullWidth
          required />
      </Grid>
      
      <Grid item xs={12} >
        <InputLabel htmlFor="password" >Пароль</InputLabel>
        <Input
          type="text"
          id="password"
          value={password}
          placeholder="*************"
          onChange={passwordChangeHandle}
          fullWidth
          required />
      </Grid>

      <Grid justify="flex-end" container >
        <Link onClick={forgotPasswordHandler} className={classes.link} >Забыли пароль?</Link>
      </Grid> 

      <Grid item xs={12} >
        <Button className={classes.button} fullWidth type="submit" variant="contained" color="primary">Войти</Button>
      </Grid>
      
      <Grid justify="center" container >
        <Typography color="textSecondary">
          Новый пользователь? 
          <Link onClick={onSignUp}>
            Регистрация
          </Link>
        </Typography>
      </Grid>
    </Form>
  );
};

export default FormLogin;