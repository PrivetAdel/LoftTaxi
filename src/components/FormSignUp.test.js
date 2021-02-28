import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {AuthorizationContecxt} from './AuthorizationContecxt';
import FormSignUp from './FormSignUp';

describe("FormSignUp", () => {
  const props = {
    onLogIn: jest.fn(), 
    onSubmit: jest.fn()
  };

  let isLoggedIn = false;

  it("change value input 'email'", () => {
    const {getByLabelText} = render(
      <AuthorizationContecxt.Provider value={{isLoggedIn}}>
        <FormSignUp {...props} />
      </AuthorizationContecxt.Provider>
    );

    const inputEmail = getByLabelText(/Email/i);
    fireEvent.change(inputEmail, {target: {value: 'test@test.com'}});
    expect(inputEmail.value).toBe('test@test.com');
  });

  it("change value input 'name'", () => {
    const {getByLabelText} = render(
      <AuthorizationContecxt.Provider value={{isLoggedIn}}>
        <FormSignUp {...props} />
      </AuthorizationContecxt.Provider>
    );

    const inputName = getByLabelText(/Как вас зовут/i);
    fireEvent.change(inputName, {target: {value: 'Name'}});
    expect(inputName.value).toBe('Name');
  });

  it("change value input 'password'", () => {
    const {getByLabelText} = render(
    <AuthorizationContecxt.Provider value={{isLoggedIn}}>
      <FormSignUp {...props} />
    </AuthorizationContecxt.Provider>
  );

    const inputPassword = getByLabelText(/Пароль/i);
    fireEvent.change(inputPassword, {target: {value: '123123'}});
    expect(inputPassword.value).toBe('123123');
  });

  it("click on link 'Войти'", () => {
    const {getByText} = render(
      <AuthorizationContecxt.Provider value={{isLoggedIn}}>
        <FormSignUp {...props} />
      </AuthorizationContecxt.Provider>
    );

    const link = getByText(/Войти/i);
    fireEvent.click(link);
    expect(props.onLogIn).toHaveBeenCalled();
  });

  it("submit form", () => {
    const login = jest.fn();

    const {getByTestId} = render(
      <AuthorizationContecxt.Provider value={{isLoggedIn, login}}>
        <FormSignUp {...props} />
      </AuthorizationContecxt.Provider>
    );

    fireEvent.submit(getByTestId('form'));
    expect(login).toHaveBeenCalled();
  });
});