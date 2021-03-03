import React from 'react';
import PropTypes from 'prop-types';
// import {postAuth} from './service';
import store from '../redux/store';

export const AuthorizationContecxt = React.createContext();

export const Provider = ({children}) => {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // const login = (email, password) => {
  //   return postAuth(email, password).then(result => setIsLoggedIn(result.success));
  // };

  // const logout = () => setIsLoggedIn(false);

  return (
    // <AuthorizationContecxt.Provider value={isLoggedIn, login, logout}>
    <AuthorizationContecxt.Provider value={store}>
      {children}
    </AuthorizationContecxt.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node
};

export default Provider;
