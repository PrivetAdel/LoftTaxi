import React from 'react';
import {Container, Typography, InputLabel, Input, Link, FormHelperText} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {SubmitButton} from '../../components';
import {useForm} from 'react-hook-form';
import {logIn} from '../../redux/actions';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 10)
  },
  form: {
    width: '100%'
  },
  title: {
    fontWeight: 700,
    margin: theme.spacing(1, 0, 2)
  },
  label: {
    marginTop: theme.spacing(3)
  },
  link: {
    color: '#828282'
  }
}));

const FormLogin = ({onSignUp}) => {
  const {register, handleSubmit, errors} = useForm();
  const dispatch = useDispatch();
  const classes = useStyles();

  const submitFormHandler = (data) => {
    const {email, password} = data;
    dispatch(logIn(email, password));
  };

  const forgotPasswordHandler = (evt) => {
    evt.preventDefault();
    console.log('forgot password');    
  }

  return (
    <Container maxWidth="sm" className={classes.root} >
      <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
        Войти
      </Typography>

      <form data-testid="form" className={classes.form} onSubmit={handleSubmit(submitFormHandler)} >
        <InputLabel htmlFor="email" className={classes.label} >Email</InputLabel>
        <Input
          fullWidth
          id="email"
          name="email"
          type="email"
          placeholder="mail@mail.ru"
          inputRef={register({required: true})}
          error={!!errors.password} />
        {errors.email && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}

        <InputLabel htmlFor="password" className={classes.label} >Пароль</InputLabel>
        <Input
          fullWidth
          id="password"
          name="password"
          type="password"
          placeholder="*************"
          inputRef={register({required: true})}
          error={errors.password ? true : false} />
        {errors.password && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}
        
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
      </form>
    </Container>
  );
};

FormLogin.propTypes = {
  onSignUp: PropTypes.func.isRequired
};

FormLogin.defaultProps = {
  onSignUp: () => {}
};

export default FormLogin;
