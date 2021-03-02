import React from 'react';
import {FormLogIn, FormSignUp} from '../components';
import {Redirect} from 'react-router-dom';
import {AuthorizationContecxt} from '../components/AuthorizationContecxt';
import PropTypes from 'prop-types';

const LoginPage = () => {
  const [activeForm, setActiveForm] = React.useState(true);
  const {isLoggedIn, logout} = React.useContext(AuthorizationContecxt);

  const onToggleForm = () => {
    setActiveForm((state) => !state);
  };

  return (
    <div>
      { 
        isLoggedIn ? <Redirect to="/" /> :
        (activeForm ? <FormLogIn onSignUp={onToggleForm} onSubmit={logout} /> : <FormSignUp onLogIn={onToggleForm} onSubmit={logout} />)
      }
    </div>
  );
};

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

LoginPage.defaultProps = {
  onSubmit: () => {}
};

export default LoginPage;