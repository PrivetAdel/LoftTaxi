import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import SuccessfulOrder from './SuccessfulOrder';

describe("SuccessfulOrder", () => {
  it("render SuccessfulOrder component", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {getOrder(false)},
    };

    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store={mockStore}>
        <SuccessfulOrder />
      </Provider>
    
    );
    expect(getByText('Заказ размещен')).toBeInTheDocument();
  })
});
