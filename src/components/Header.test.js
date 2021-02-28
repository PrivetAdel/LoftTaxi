import React from 'react';
import {render} from '@testing-library/react';
import Header from './Header';
import {AuthorizationContecxt} from './AuthorizationContecxt';

describe("Header", () => {
  const props = {
    onClickPage: jest.fn(), 
    onClickLogout: jest.fn()
  };


  it("render Header component with context", () => {
    let isLoggedIn = true;

    const {getByRole} = render(
      <AuthorizationContecxt.Provider value={{isLoggedIn}}>
        <Header {...props} />
      </AuthorizationContecxt.Provider>
    );
    expect(getByRole('menu')).toBeInTheDocument();
  });

  it("Header is not rendered", () => {
    let isLoggedIn = false;

    const {queryByRole} = render(
      <AuthorizationContecxt.Provider value={{isLoggedIn}}>
        <Header {...props} />
      </AuthorizationContecxt.Provider>
    );
    expect(queryByRole('menu')).not.toBeInTheDocument();
  });
});
