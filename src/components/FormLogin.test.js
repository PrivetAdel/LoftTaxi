import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {AuthorizationContecxt} from './AuthorizationContecxt';
import FormLogin from './FormLogin';

describe("FormLogin", () => {
  const props = {
    onSignUp: jest.fn(), 
    onSubmit: jest.fn()
  };

  let isLoggedIn = false;

  it("change value input 'email'", () => {
    const {getByLabelText} = render(
      <AuthorizationContecxt.Provider value={{isLoggedIn}}>
        <FormLogin {...props} />
      </AuthorizationContecxt.Provider>
    );

    const inputEmail = getByLabelText(/Email/i);
    fireEvent.change(inputEmail, {target: {value: 'test@test.com'}});
    expect(inputEmail.value).toBe('test@test.com');
  });

  it("change value input 'password'", () => {
    const {getByLabelText} = render(
      <AuthorizationContecxt.Provider value={{isLoggedIn}}>
        <FormLogin {...props} />
      </AuthorizationContecxt.Provider>
    );

    const inputPassword = getByLabelText(/Пароль/i);
    fireEvent.change(inputPassword, {target: {value: '123123'}});
    expect(inputPassword.value).toBe('123123');
  });

  it("click on link 'Регистрация'", () => {
    const {getByText} = render(
      <AuthorizationContecxt.Provider value={{isLoggedIn}}>
        <FormLogin {...props} />
      </AuthorizationContecxt.Provider>
    );

    const link = getByText(/Регистрация/i);
    fireEvent.click(link);
    expect(props.onSignUp).toHaveBeenCalled();
  });

  it("submit form", () => {
    const login = jest.fn();

    const {getByTestId} = render(
      <AuthorizationContecxt.Provider value={{isLoggedIn, login}}>
        <FormLogin {...props} />
      </AuthorizationContecxt.Provider>
    );

    fireEvent.submit(getByTestId('form'));
    expect(login).toHaveBeenCalled();
  });
});
