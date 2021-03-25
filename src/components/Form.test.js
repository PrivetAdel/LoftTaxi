import React from 'react';
import {render} from '@testing-library/react';
import Form from './Form';

describe("Form", () => {
  const props = {
    children: `${<input />}`, 
    onSubmitHandler: jest.fn(),
  };

  it("render Form component", () => {
    const {getByTestId} = render(
      <Form {...props}>{props.children}</Form>
    );
    expect(getByTestId('form')).toBeInTheDocument();
  });
});
