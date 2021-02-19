import React from 'react';
import {FormLogIn, FormSignUp} from '../components';

const LoginPage = () => {
  const [activeForm, setActiveForm] = React.useState(true)

  const onToggleForm = () => {
    setActiveForm((state) => !state);
  }

  return (
    <div>
      <h1 className="page-title">Login Page</h1>
      {
        activeForm ? <FormLogIn onSignUp={onToggleForm} /> : <FormSignUp onLogIn={onToggleForm} />
      }
    </div>
  );
};

export default LoginPage;