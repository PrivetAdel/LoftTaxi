import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FormProfileSave from './FormProfileSave';

describe("FormProfileSave", () => {
  it("render FormProfileSave component", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };

    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store={mockStore}>
        <Router history={history}>
          <FormProfileSave />
        </Router>
      </Provider>
    
    );
    expect(getByText('Профиль')).toBeInTheDocument();
  })
});
