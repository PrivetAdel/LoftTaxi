import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import Map from './Map';

describe("Map", () => {
  it("render Map component", () => {
    const getOrder = jest.fn();

    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {getOrder(true)},
    };

    const {getByTestId} = render(
      <Provider store={mockStore}>
         <Map />
      </Provider>
    );
    expect(getByTestId('map')).toBeInTheDocument();
  });
});
