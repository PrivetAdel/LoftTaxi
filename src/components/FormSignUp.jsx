import React from 'react';
import {Grid, Typography, Button, InputLabel, Input, Link} from '@material-ui/core';
import Form from './Form';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    borderRadius: '70px', 
    padding: '9px 0',
    fontSize: '24px',
    margin: '46px 0 33px'
  }
});

const FormSignUp = ({onLogIn, onSubmit}) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const emailChangeHandle = (evt) => {
    setEmail(evt.target.value);
  }

  const userNameChangeHandle = (evt) => {
    setUserName(evt.target.value);
  }

  const passwordChangeHandle = (evt) => {
    setPassword(evt.target.value);
  }

  const signUpHandler = (evt) => {
    evt.preventDefault();
    console.log('email: ', email, 'userName: ', userName, 'password: ', password);
    onSubmit();
  }

  return (
    <Form title={'Регистрация'} onSubmitHandler={signUpHandler}>
      <Grid item sm={12} >
        <InputLabel htmlFor="email" >Email*</InputLabel>
        <Input
          type="text"
          id="email"
          value={email}
          placeholder="mail@mail.ru"
          onChange={emailChangeHandle}
          fullWidth
          required />
      </Grid>

      <Grid item sm={12} >
        <InputLabel htmlFor="userName" >Как вас зовут?*</InputLabel>
        <Input
          type="text"
          id="userName"
          value={userName}
          placeholder="Петр Александрович"
          onChange={userNameChangeHandle}
          fullWidth
          required />
      </Grid>

      <Grid item sm={12} >
        <InputLabel htmlFor="password" >Придумайте пароль*</InputLabel>
        <Input
          type="text"
          id="password"
          value={password}
          placeholder="*************"
          onChange={passwordChangeHandle}
          fullWidth
          required />
      </Grid>

      <Grid item sm={12} >
        <Button fullWidth type="submit" variant="contained" color="primary" className={classes.button} disabled >Зарегистрироваться</Button>
      </Grid>
      
      <Grid justify="center" container >
        <Typography color="textSecondary">
          Уже зарегестрированны? 
          <Link onClick={onLogIn} >
            Войти
          </Link>
        </Typography>
      </Grid>
    </Form>
  );
};

export default FormSignUp;