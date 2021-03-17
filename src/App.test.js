import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import App from './App';

test("render App component", () => {
  const mockStore = {
    getState: () => ({authReducer: {isLoggedIn: false}}),
    subscribe: () => {},
    dispatch: () => {},
  };

  const history = createMemoryHistory();

  const {getByTestId} = render(
    <Provider store={mockStore}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  expect(getByTestId('formTitle')).toBeInTheDocument();
});
