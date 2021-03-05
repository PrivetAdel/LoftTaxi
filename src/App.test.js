import React from 'react';
import {render} from '@testing-library/react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';

test("render App component", () => {
  const mockStore = {
    getState: () => ({isLoggedIn: false}),
    subscribe: () => {},
    dispatch: () => {},
  };

  const {getByTestId} = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );

  expect(getByTestId('formTitle')).toBeInTheDocument();
});
