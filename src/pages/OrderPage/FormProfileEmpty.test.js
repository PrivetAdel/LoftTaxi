import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FormProfileEmpty from './FormProfileEmpty';

describe("FormProfileEmpty", () => {
  it("render FormProfileEmpty component", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <FormProfileEmpty />
        </Router>
      </Provider>
    
    );
    expect(getByText(/Для заказа такси/i)).toBeInTheDocument();
  })
});
