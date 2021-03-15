import React from 'react';
import FormLogIn from './FormLogIn';
import FormSignUp from './FormSignUp';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

const LoginPage = () => {
  const [activeForm, setActiveForm] = React.useState(true);
  const isLoggedIn = useSelector(({authReducer}) => authReducer.isLoggedIn);
  
  const onToggleForm = () => {
    setActiveForm((state) => !state);
  };

  return (
    <div>
      { 
        isLoggedIn ? <Redirect to="/main" /> :
        (activeForm ? <FormLogIn onSignUp={onToggleForm} /> : <FormSignUp onLogIn={onToggleForm} />)
      }
    </div>
  );
};

export default LoginPage;
