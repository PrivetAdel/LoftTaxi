import React from 'react';
import Button from './Button';

const FormLogin = ({onSignUp, onSubmit}) => {
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
    <div className="form">
      <h2>Войти</h2>
      <form onSubmit={submitFormHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          placeholder="mail@mail.ru"
          onChange={emailChangeHandle}
          required />
        <label htmlFor="password">Пароль</label>
        <input
          type="text"
          id="password"
          value={password}
          placeholder="*************"
          onChange={passwordChangeHandle}
          required />
        <button onClick={forgotPasswordHandler}>Забыли пароль?</button>
        <Button>Войти</Button>
        <p>
          Новый пользователь?
          <button onClick={onSignUp}>
            Регистрация
          </button>
        </p>
      </form>
    </div>
  );
};

export default FormLogin;