import React from 'react';
import {render, fireEvent, act} from '@testing-library/react';
import {Provider} from 'react-redux';
import FormLogin from './FormLogin';

describe("FormLogin", () => {
  const props = {
    onSignUp: jest.fn()
  };

  it("change value input 'email'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByLabelText} = render(
      <Provider store={mockStore}>
        <FormLogin {...props} />
      </Provider>
    );

    const inputEmail = getByLabelText(/Email/i);
    fireEvent.change(inputEmail, {target: {value: 'test@test.com'}});
    expect(inputEmail.value).toBe('test@test.com');
  });

  it("change value input 'password'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByLabelText} = render(
      <Provider store={mockStore}>
        <FormLogin {...props} />
      </Provider>
    );

    const inputPassword = getByLabelText(/Пароль/i);
    fireEvent.change(inputPassword, {target: {value: '123123'}});
    expect(inputPassword.value).toBe('123123');
  });

  it("click on link 'Регистрация'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByText} = render(
      <Provider store={mockStore}>
        <FormLogin {...props} />
      </Provider>
    );

    const link = getByText(/Регистрация/i);
    fireEvent.click(link);
    expect(props.onSignUp).toHaveBeenCalled();
  });

  it("submit form", async () => {
    const logIn = jest.fn();

    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {logIn('test@test.com', '123123')},
    };

    const {getByTestId} = render(
      <Provider store={mockStore}>
        <FormLogin {...props} />
      </Provider>
    );

    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    });
    
    expect(logIn).toHaveBeenCalled();
  });
});
