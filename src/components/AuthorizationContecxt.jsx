import React from 'react';
import PropTypes from 'prop-types';
import {postAuth} from './service';

export const AuthorizationContecxt = React.createContext();

export const Provider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = (email, password) => {
    return postAuth(email, password).then(result => setIsLoggedIn(result.success));
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
