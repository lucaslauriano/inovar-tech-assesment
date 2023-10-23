import { render, cleanup } from '@testing-library/react';
import React from 'react';

import Tag from '@/components/Tag';

afterEach(cleanup);

describe('Tag Component', () => {
  it('should render with default values', () => {
    const { getByText } = render(<Tag />);
    expect(getByText('Unknown Entity')).toBeInTheDocument();
  });

  it('should render with specified label', () => {
    const { getByText } = render(<Tag label='Test Label' />);

    expect(getByText('Test Label')).toBeInTheDocument();
  });

  it('should render with specified entity', () => {
    const { getByText } = render(<Tag entity='PRODUCT_DESING' />);

    expect(getByText('Product Desing')).toBeInTheDocument();
  });

  it('should apply background color based on entity', () => {
    const { container } = render(<Tag entity='OPINION' />);

    const element = container.querySelector('.bg-blue-600');

    expect(element).toBeInTheDocument();
  });
});
