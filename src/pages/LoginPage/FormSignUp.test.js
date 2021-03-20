import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import FormSignUp from './FormSignUp';

describe("FormSignUp", () => {
  const props = {
    onLogIn: jest.fn()
  };

  it("change value input 'email'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByLabelText} = render(
      <Provider store={mockStore}>
        <FormSignUp {...props} />
      </Provider>
    );

    const inputEmail = getByLabelText(/Email/i);
    fireEvent.change(inputEmail, {target: {value: 'test@test.com'}});
    expect(inputEmail.value).toBe('test@test.com');
  });

  it("change value input 'name'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByLabelText} = render(
      <Provider store={mockStore}>
        <FormSignUp {...props} />
      </Provider>
    );

    const inputName = getByLabelText(/Имя/i);
    fireEvent.change(inputName, {target: {value: 'Name'}});
    expect(inputName.value).toBe('Name');
  });

  it("change value input 'surname'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByLabelText} = render(
      <Provider store={mockStore}>
        <FormSignUp {...props} />
      </Provider>
    );

    const inputSurname = getByLabelText(/Фамилия/i);
    fireEvent.change(inputSurname, {target: {value: 'Surname'}});
    expect(inputSurname.value).toBe('Surname');
  });

  it("change value input 'password'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByLabelText} = render(
      <Provider store={mockStore}>
        <FormSignUp {...props} />
      </Provider>
    );

    const inputPassword = getByLabelText(/Пароль/i);
    fireEvent.change(inputPassword, {target: {value: '123123'}});
    expect(inputPassword.value).toBe('123123');
  });

  it("click on link 'Войти'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByText} = render(
      <Provider store={mockStore}>
        <FormSignUp {...props} />
      </Provider>
    );

    const link = getByText(/Войти/i);
    fireEvent.click(link);
    expect(props.onLogIn).toHaveBeenCalled();
  });

  it("submit form", () => {
    const logIn = jest.fn();

    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {logIn('test@test.com', '123123')},
    };

    const {getByTestId} = render(
      <Provider store={mockStore}>
        <FormSignUp {...props} />
      </Provider>
    );

    fireEvent.submit(getByTestId('form'));
    expect(logIn).toHaveBeenCalled();
  });
});
