import React from 'react';
import {render} from '@testing-library/react';
import {SubmitButton} from './SubmitButton';

describe("SubmitButton", () => {
  const props = {
    children: 'Войти'
  };

  it("render SubmitButton component", () => {
    const {getByRole} = render(
      <SubmitButton>{props.children}</SubmitButton>
    );
    expect(getByRole('button')).toBeInTheDocument();
  });

  it("render SubmitButton component with children", () => {
      const {getByText} = render(
      <SubmitButton>{props.children}</SubmitButton>
    );
    expect(getByText(/Войти/i)).toBeInTheDocument();
  });
});
