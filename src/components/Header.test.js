import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Header from './Header';

describe("Header", () => {

  it("render Header component", () => {
    const mockStore = {
      getState: () => ({isLoggedIn: true}),
      subscribe: () => {},
      dispatch: () => {},
    };

    const history = createMemoryHistory();

    const {getByRole} = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    );
    expect(getByRole('menu')).toBeInTheDocument();
  });
});
