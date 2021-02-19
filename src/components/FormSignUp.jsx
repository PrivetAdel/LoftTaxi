import React from 'react';
import Button from './Button';

const FormSignUp = ({onLogIn}) => {
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
    setEmail('');
    setUserName('');
    setPassword('');
  }

  return (
    <div className="form">
      <h2>Регистрация</h2>
      <form>
        <label htmlFor="email">Email*</label>
        <input
          type="text"
          id="email"
          value={email}
          placeholder="mail@mail.ru"
          onChange={emailChangeHandle}
          required />
        <label htmlFor="userName">Как вас зовут?*</label>
        <input
          type="text"
          id="userName"
          value={userName}
          placeholder="Петр Александрович"
          onChange={userNameChangeHandle}
          required />
        <label htmlFor="password">Придумайте пароль*</label>
        <input
          type="text"
          id="password"
          value={password}
          placeholder="*************"
          onChange={passwordChangeHandle}
          required />
        <Button onClickSingUp={signUpHandler}>Зарегистрироваться</Button>
        <p>
          Уже зарегестрированны? 
          <a onClick={onLogIn} href="#">
            Войти
          </a>
        </p>
      </form>
    </div>
  );
};

export default FormSignUp;