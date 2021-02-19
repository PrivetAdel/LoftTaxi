import React from 'react';
import Button from './Button';

const FormLogin = ({onSignUp}) => {
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
    setEmail('');
    setPassword('');
  }

  const forgotPasswordHandler = (evt) => {
    evt.preventDefault();
    console.log('forgot password');    
  }

  return (
    <div className="form">
      <h2>Войти</h2>
      <form>
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
        <Button onSubmitClick={submitFormHandler}>Войти</Button>
        <p>
          Новый пользователь?
          <a onClick={onSignUp} href="#">
            Регистрация
          </a>
        </p>
      </form>
    </div>
  );
};

export default FormLogin;