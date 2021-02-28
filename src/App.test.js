import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('render App component', () => {
  render(<App />);
  const title = screen.getByTitle(/Войти/i);
  expect(title).toBeInTheDocument();
});