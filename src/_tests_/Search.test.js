import React from 'react';
import { render } from '@testing-library/react';
import Search from '../components/Search';

describe('Search', () => {
  const { asFragment } = render(<Search />);

  it('renders correctly', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders search input as expected', () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId('search-input');
    expect(input).toBeTruthy();
  });

  it('renders search button as expected', () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId('search-btn');
    expect(input).toBeTruthy();
  });
});
