import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import Button from '@/components/Button';

describe('Button Component', () => {
  it('should render a button element', () => {
    render(<Button />);
    const element = screen.getByTestId('button__testid');
    expect(element).toBeInTheDocument();
  });

  // it('should apply the specified size class', () => {
  //   const { container } = render(<Button size='sm' />);
  //   const buttonElement = container.querySelector('.h-[36px]');

  //   expect(buttonElement).toBeInTheDocument();
  // });

  // it('should apply the specified color class', () => {
  //   const { container } = render(<Button color='secondary' />);
  //   const buttonElement = container.querySelector('.bg-white');

  //   expect(buttonElement).toBeInTheDocument();
  // });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click Me</Button>,
    );
    const buttonElement = getByText('Click Me');

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
  });

  it('should disable the button when disabled is true', () => {
    const { container } = render(<Button disabled />);
    const buttonElement = container.querySelector('button');

    expect(buttonElement).toBeDisabled();
  });

  it('should render an icon on the left', () => {
    const { container } = render(<Button icon='search' />);
    const iconElement = container.querySelector('.text-right');

    expect(iconElement).toBeInTheDocument();
  });

  // it('should render text and icon on the right', () => {
  //   const { getByText } = render(
  //     <Button icon='search' iconPosition='right'>
  //       Text
  //     </Button>,
  //   );
  //   const textElement = getByText('Text');
  //   const iconElement = getByText('search');

  //   expect(textElement).toBeInTheDocument();
  //   expect(iconElement).toBeInTheDocument();
  // });
});
