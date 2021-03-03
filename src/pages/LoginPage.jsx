import React from 'react';
import {FormLogIn, FormSignUp} from '../components';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginPage = ({auth}) => {
  const [activeForm, setActiveForm] = React.useState(true);

  const onToggleForm = () => {
    setActiveForm((state) => !state);
  };

  return (
    <div>
      { 
        auth ? <Redirect to="/" /> :
        (activeForm ? <FormLogIn onSignUp={onToggleForm} /> : <FormSignUp onLogIn={onToggleForm} />)
      }
    </div>
  );
};

LoginPage.propTypes = {
  auth: PropTypes.bool.isRequired
};

LoginPage.defaultProps = {
  auth: false
};

export default LoginPage;