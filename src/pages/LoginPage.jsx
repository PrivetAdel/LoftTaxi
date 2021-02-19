import React from 'react';
import {FormLogIn, FormSignUp} from '../components';

const LoginPage = ({onSubmit}) => {
  const [activeForm, setActiveForm] = React.useState(true)

  const onToggleForm = () => {
    setActiveForm((state) => !state);
  }

  return (
    <div>
      <h1 className="page-title">Login Page</h1>
      {
        activeForm ? <FormLogIn onSignUp={onToggleForm} onSubmit={onSubmit} /> : <FormSignUp onLogIn={onToggleForm} onSubmit={onSubmit} />
      }
    </div>
  );
};

export default LoginPage;