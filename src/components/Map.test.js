import React from 'react';
import {render} from '@testing-library/react';
import Map from './Map';

describe("Map", () => {
  it("render Map component", () => {
    const {getByTestId} = render(<Map />);
    expect(getByTestId('map')).toBeInTheDocument();
  });
});
