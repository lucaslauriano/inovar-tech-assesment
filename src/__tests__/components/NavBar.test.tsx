import { render, screen } from '@testing-library/react';

import NavBar from '@/components/NavBar';

describe('NavBar', () => {
  test('should renders NavBar component', () => {
    render(<NavBar />);
    const navBarElement = screen.getByTestId('navbar__testid');
    expect(navBarElement).toBeInTheDocument();
  });
});
