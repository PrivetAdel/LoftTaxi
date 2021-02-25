import React from 'react';
import {FormLogIn, FormSignUp} from '../components';
import PropTypes from 'prop-types';

const LoginPage = ({onSubmit}) => {
  const [activeForm, setActiveForm] = React.useState(true)

  const onToggleForm = () => {
    setActiveForm((state) => !state);
  }

  return (
    <div>
      {
        activeForm ? <FormLogIn onSignUp={onToggleForm} onSubmit={onSubmit} /> : <FormSignUp onLogIn={onToggleForm} onSubmit={onSubmit} />
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