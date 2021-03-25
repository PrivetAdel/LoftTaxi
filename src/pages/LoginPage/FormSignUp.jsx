import React, {useCallback} from 'react';
import {Container, Typography, InputLabel, Input, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {signUp} from '../../redux/actions';
import {Form, SubmitButton} from '../../components';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 10)
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
  const [formData, setFormData] = React.useState({
    email: '', 
    name: '', 
    surname: '', 
    password: ''
  });
  const {register, errors} = useForm();
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({ ...formData, [name]: value});
  };

  const registrationHandler = useCallback((formData) => {
    dispatch(signUp(formData));
  }, []);

  const signUpHandler = () => {
    registrationHandler(formData);
  };

  return (
    <Container maxWidth="sm" className={classes.root} >
      <Typography className={classes.title} align="center" variant="h4">
        Регистрация
      </Typography>

      <Form onSubmitHandler={signUpHandler}>
        <InputLabel htmlFor="email" className={classes.label} >Email*</InputLabel>
        <Input
          required
          fullWidth
          type="text"
          id="email"
          name="email"
          placeholder="mail@mail.ru"
          ref={register}
          value={formData.email}
          onChange={handleChange} />
        {errors.email && <p>Поле обязательно для заполнения</p>}

        <InputLabel htmlFor="name" className={classes.label} >Имя*</InputLabel>
        <Input
          required
          fullWidth
          type="text"
          id="name"
          name="name"
          placeholder="Петр"
          value={formData.name}
          inputRef={register}
          onChange={handleChange} />
        {errors.name && <p>Поле обязательно для заполнения</p>}

        <InputLabel htmlFor="surname" className={classes.label} >Фамилия*</InputLabel>
        <Input
          required
          fullWidth
          type="text"
          id="surname"
          name="surname"
          placeholder="Петров"
          value={formData.surname}
          inputRef={register}
          onChange={handleChange} />
        {errors.surname && <p>Поле обязательно для заполнения</p>}

        <InputLabel htmlFor="password" className={classes.label} >Придумайте пароль*</InputLabel>
        <Input
          required
          fullWidth
          type="text"
          id="password"
          name="password"
          placeholder="*************"
          ref={register}
          value={formData.password}
          onChange={handleChange} />
        {errors.password && <p>Поле обязательно для заполнения</p>}

        <SubmitButton>Зарегистрироваться</SubmitButton>

        <Typography color="textSecondary" align="center">
          Уже зарегестрированны? 
          <Link onClick={onLogIn} >
            Войти
          </Link>
        </Typography>
      </Form>
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
