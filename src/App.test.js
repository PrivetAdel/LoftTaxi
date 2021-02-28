import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {AuthorizationContecxt} from './components/AuthorizationContecxt';

test("render App component", () => {
  const value = {
    isLoggedIn: false, 
    login: jest.fn(),
    logout: jest.fn()
  };

  const {getByTestId} = render(
    <AuthorizationContecxt.Provider value={{...value}}>
      <App />
    </AuthorizationContecxt.Provider>
  );

  expect(getByTestId('formTitle')).toBeInTheDocument();
});
