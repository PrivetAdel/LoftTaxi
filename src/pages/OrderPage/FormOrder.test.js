import React from 'react';
import {render, fireEvent, act} from '@testing-library/react';
import {Provider} from 'react-redux';
import FormOrder from './FormOrder';

describe("FormOrder", () => {
  it("select 'address1'", () => {
    const mockStore = {
      getState: () => ({orderReducer: {addresses: ['address1', 'address2']}}),
      subscribe: () => {},
      dispatch: () => {},
    };

    const {getByTestId} = render(
      <Provider store={mockStore}>
        <FormOrder />
      </Provider>
    );

    const inputName = getByTestId('select');
    fireEvent.change(inputName, {target: {value: 'address1'}});
    expect(inputName.value).toBe('address1');
  });

  it("submit form", async () => {
    const addAddresses = jest.fn();

    const mockStore = {
      getState: () => ({orderReducer: {addresses: []}}),
      subscribe: () => {},
      dispatch: () => {addAddresses('address1', 'address2')},
    };

    const {getByTestId} = render(
      <Provider store={mockStore}>
        <FormOrder />
      </Provider>
    );

    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    });
    
    expect(addAddresses).toHaveBeenCalled();
  });
});
