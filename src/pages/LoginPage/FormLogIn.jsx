import React, {useCallback} from 'react';
import {Container, Typography, InputLabel, Input, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {Form, SubmitButton} from '../../components';
import {useForm} from 'react-hook-form';
import {logIn} from '../../redux/actions';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 10)
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
  const [formData, setFormData] = React.useState({email: '', password: ''});
  const {register, errors} = useForm();
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({ ...formData, [name]: value});
  };

  const loginHandler = useCallback((formData) => {
    dispatch(logIn(formData));
  }, []);

  const submitFormHandler = () => {
    loginHandler(formData);
  }

  const forgotPasswordHandler = (evt) => {
    evt.preventDefault();
    console.log('forgot password');    
  }

  return (
    <Container maxWidth="sm" className={classes.root} >
      <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
        Войти
      </Typography>

      <Form onSubmitHandler={submitFormHandler} >
        <InputLabel htmlFor="email" className={classes.label} >Email</InputLabel>
        <Input
          fullWidth
          id="email"
          name="email"
          type="email"
          placeholder="mail@mail.ru"
          value={formData.email}
          onChange={handleChange}
          inputRef={register({required: "required", message: "Поле обязательно для заполнения"})} />
        {errors.email && <span>{errors.email.message}</span>}

        <InputLabel htmlFor="password" className={classes.label} >Пароль</InputLabel>
        <Input
          fullWidth
          id="password"
          name="password"
          type="password"
          placeholder="*************"
          value={formData.password}
          onChange={handleChange}
          inputRef={register({required: true})} />
        {errors.password && <p>Поле обязательно для заполнения</p>}
        
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
