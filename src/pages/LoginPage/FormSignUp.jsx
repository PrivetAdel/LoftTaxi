import React, {useCallback} from 'react';
import {Typography, InputLabel, Input, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {signUp} from '../../redux/actions';
import {FormContainer, Form, SubmitButton} from '../../components';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    margin: theme.spacing(1, 0, 2)
  },
  label: {
    marginTop: theme.spacing(3)
  }
}));

const FormSignUp = ({onLogIn}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [password, setPassword] = React.useState('');

  const emailChangeHandle = (evt) => {
    setEmail(evt.target.value);
  };

  const nameChangeHandle = (evt) => {
    setName(evt.target.value);
  };

  const surnameChangeHandle = (evt) => {
    setSurname(evt.target.value);
  }

  const passwordChangeHandle = (evt) => {
    setPassword(evt.target.value);
  };

  const registrationHandler = useCallback((email, password, name, surname) => {
    dispatch(signUp(email, password, name, surname));
  }, []);

  const signUpHandler = (evt) => {
    evt.preventDefault();
    registrationHandler(email, password, name, surname);
  };

  return (
    <FormContainer maxWidth="sm" padding="8, 12">
      <Typography className={classes.title} align="center" variant="h4">
        Регистрация
      </Typography>

      <Form onSubmitHandler={signUpHandler}>
        <InputLabel htmlFor="email" className={classes.label} >Email*</InputLabel>
        <Input
          type="text"
          id="email"
          value={email}
          placeholder="mail@mail.ru"
          onChange={emailChangeHandle}
          fullWidth
          required />

        <InputLabel htmlFor="name" className={classes.label} >Имя*</InputLabel>
        <Input
          type="text"
          id="name"
          value={name}
          placeholder="Петр"
          onChange={nameChangeHandle}
          fullWidth
          required />


        <InputLabel htmlFor="surname" className={classes.label} >Фамилия*</InputLabel>
        <Input
          type="text"
          id="surname"
          value={surname}
          placeholder="Петров"
          onChange={surnameChangeHandle}
          fullWidth
          required />

        <InputLabel htmlFor="password" className={classes.label} >Придумайте пароль*</InputLabel>
        <Input
          type="text"
          id="password"
          value={password}
          placeholder="*************"
          onChange={passwordChangeHandle}
          fullWidth
          required />

        <SubmitButton>Зарегистрироваться</SubmitButton>

        <Typography color="textSecondary" align="center">
          Уже зарегестрированны? 
          <Link onClick={onLogIn} >
            Войти
          </Link>
        </Typography>
      </Form>
    </FormContainer>
  );
};

FormSignUp.propTypes = {
  onLogIn: PropTypes.func.isRequired
};

FormSignUp.defaultProps = {
  onLogIn: () => {}
};

export default FormSignUp;
