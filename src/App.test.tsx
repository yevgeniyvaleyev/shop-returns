import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shop-returns app is coming soon.../i);
  expect(linkElement).toBeInTheDocument();
});
