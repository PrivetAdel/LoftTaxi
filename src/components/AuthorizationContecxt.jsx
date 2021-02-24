import React from 'react';

export const AuthorizationContecxt = React.createContext();

export const Provider = ({children, value}) => {
  return (
    <AuthorizationContecxt.Provider value={value}>
      {children}
    </AuthorizationContecxt.Provider>
  );
};

export default Provider;