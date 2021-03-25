import React from 'react';
import {render} from '@testing-library/react';
import Overlay from './Overlay';

describe("Overlay", () => {
  it("render Overlay component", () => {
    const {getByTestId} = render(
      <Overlay />
    );
    
    expect(getByTestId('overlay')).toBeInTheDocument();
  });
});
