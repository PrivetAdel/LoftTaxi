import React from 'react';
import {render, fireEvent, act} from '@testing-library/react';
import {Provider} from 'react-redux';
import FormProfile from './FormProfile';

describe("FormProfile", () => {
  const props = {
    cardData: {}
  };

  it("change value input 'name'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByLabelText} = render(
      <Provider store={mockStore}>
        <FormProfile {...props} />
      </Provider>
    );

    const inputName = getByLabelText(/Имя/i);
    fireEvent.change(inputName, {target: {value: 'Some Name'}});
    expect(inputName.value).toBe('Some Name');
  });

  it("change value input 'cardNumber'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByLabelText} = render(
      <Provider store={mockStore}>
        <FormProfile {...props} />
      </Provider>
    );

    const inputCardNumber = getByLabelText(/Номер/i);
    fireEvent.change(inputCardNumber, {target: {value: '1234 1234 1234 1234'}});
    expect(inputCardNumber.value).toBe('1234 1234 1234 1234');
  });

  it("change value input 'date'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByLabelText} = render(
      <Provider store={mockStore}>
        <FormProfile {...props} />
      </Provider>
    );

    const inputDate = getByLabelText(/MM/i);
    fireEvent.change(inputDate, {target: {value: '01/23'}});
    expect(inputDate.value).toBe('01/23');
  });

  it("change value input 'cvc'", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByLabelText} = render(
      <Provider store={mockStore}>
        <FormProfile {...props} />
      </Provider>
    );

    const inputCVC = getByLabelText(/CVC/i);
    fireEvent.change(inputCVC, {target: {value: '123'}});
    expect(inputCVC.value).toBe('123');
  });


  it("submit form", async () => {
    const saveCardData = jest.fn();

    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {saveCardData('Some Name', '1231231234 1234 1234 1234', '01/23', '123')},
    };

    const {getByTestId} = render(
      <Provider store={mockStore}>
        <FormProfile {...props} />
      </Provider>
    );

    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    });
    
    expect(saveCardData).toHaveBeenCalled();
  });
});
