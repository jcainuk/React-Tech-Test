import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';

describe('It renders correctly', () => {
  const validProps = {
    searchText: 'Liverpool',
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };
  it('renders as expected', () => {
    const { asFragment } = render(<Search {...validProps} />);
    expect(asFragment).toMatchSnapshot();
  });
  it('button fires the search event', () => {
    const { getByRole } = render(<Search {...validProps} />);
    const button = getByRole('button');
    userEvent.click(button);
    expect(validProps.onSubmit).toHaveBeenCalled();
  });
});
