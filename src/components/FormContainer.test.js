import React from 'react';
import {render} from '@testing-library/react';
import FormContainer from './FormContainer';

describe("FormContainer", () => {
  const props = {
    children: `${<form></form>}`
  };

  it("render FormContainer component", () => {
    const {getByTestId} = render(
      <FormContainer>{props.children}</FormContainer>
    );
    expect(getByTestId('container')).toBeInTheDocument();
  });
});
