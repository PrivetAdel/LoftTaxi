import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {AuthorizationContecxt} from './AuthorizationContecxt';
import FormLogin from './FormLogin';
import Form from './Form';

describe("FormLogin", () => {
  const props = {
    onSignUp: jest.fn, 
    onSubmit: jest.fn
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
    expect(link).toHaveBeenCalled();
  });

  it("click on submit button", () => {
    const onSubmitHandler = jest.fn();

    const {getByLabelText, getByRole} = render(
      <AuthorizationContecxt.Provider value={{isLoggedIn}}>
        <FormLogin {...props}>
          <Form onSubmitHandler={onSubmitHandler} />
        </FormLogin>
      </AuthorizationContecxt.Provider>
    );

    const inputEmail = getByLabelText(/Email/i);
    fireEvent.change(inputEmail, {target: {value: 'test@test.com'}});
    const inputPassword = getByLabelText(/Пароль/i);
    fireEvent.change(inputPassword, {target: {value: '123123'}});

    fireEvent.click(getByRole('button'));
    expect(onSubmitHandler).toHaveBeenCalled();
  });
});
