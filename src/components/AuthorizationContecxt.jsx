import React from 'react';
import PropTypes from 'prop-types';

export const AuthorizationContecxt = React.createContext();

export const Provider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = (email, password) => {
    if (email && password) {
      setIsLoggedIn(true);
    }
    return;
  }

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthorizationContecxt.Provider value={{isLoggedIn, login, logout}}>
      {children}
    </AuthorizationContecxt.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node
};

export default Provider;
