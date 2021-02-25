import React from 'react';
import PropTypes from 'prop-types';

export const AuthorizationContecxt = React.createContext();

export const Provider = ({children, value}) => {
  return (
    <AuthorizationContecxt.Provider value={value}>
      {children}
    </AuthorizationContecxt.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  }).isRequired
};

Provider.defaultProps = {
  value: {
    login: () => {},
    logout: () => {},
    isLoggedIn: false
  }
};

export default Provider;
