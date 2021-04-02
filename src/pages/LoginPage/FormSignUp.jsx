import React from 'react';
import {Container, Typography, InputLabel, Input, Link, FormHelperText} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {signUp} from '../../redux/actions';
import {useForm} from 'react-hook-form';
import {SubmitButton} from '../../components';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    maxWidth: '100%',
    justifyContent: 'center',
    borderRadius: 0,

    
    [theme.breakpoints.up('tablet')]: {
      padding: theme.spacing(4, 7),
      maxWidth: '400px',
      borderRadius: '20px',
      margin: '20px 0',
    },

    [theme.breakpoints.up('laptop')]: {
      padding: theme.spacing(4, 10),
      maxWidth: '600px'
    }
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
  }
}));

const FormSignUp = ({onLogIn}) => {
  const {register, handleSubmit, errors} = useForm();
  const dispatch = useDispatch();
  const classes = useStyles();

  const registrationHandler = (data) => {
    const {email, password, name, surname} = data;
    dispatch(signUp(email, password, name, surname));
  };

  return (
    <Container className={classes.root} >
      <Typography className={classes.title} align="center" variant="h4">
        Регистрация
      </Typography>

      <form data-testid="form" className={classes.form} onSubmit={handleSubmit(registrationHandler)} >
        <InputLabel htmlFor="email" className={classes.label} >Email*</InputLabel>
        <Input
          fullWidth
          type="text"
          id="email"
          name="email"
          placeholder="mail@mail.ru"
          inputRef={register({required: true})}
          error={!!errors.email} />
        {errors.email && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}

        <InputLabel htmlFor="name" className={classes.label} >Имя*</InputLabel>
        <Input
          fullWidth
          type="text"
          id="name"
          name="name"
          placeholder="Петр"
          inputRef={register({required: true})}
          error={!!errors.name} />
          {errors.name && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}

        <InputLabel htmlFor="surname" className={classes.label} >Фамилия*</InputLabel>
        <Input
          fullWidth
          type="text"
          id="surname"
          name="surname"
          placeholder="Петров"
          inputRef={register({required: true})}
          error={!!errors.surname} />
        {errors.surname && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}

        <InputLabel htmlFor="password" className={classes.label} >Придумайте пароль*</InputLabel>
        <Input
          fullWidth
          type="text"
          id="password"
          name="password"
          placeholder="*************"
          inputRef={register({required: true})}
          error={!!errors.password} />
        {errors.password && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}

        <SubmitButton>Зарегистрироваться</SubmitButton>

        <Typography color="textSecondary" align="center">
          Уже зарегестрированны?&ensp; 
          <Link onClick={onLogIn} >
            Войти
          </Link>
        </Typography>
      </form>
    </Container>
  );
};

FormSignUp.propTypes = {
  onLogIn: PropTypes.func.isRequired
};

FormSignUp.defaultProps = {
  onLogIn: () => {}
};

export default FormSignUp;
