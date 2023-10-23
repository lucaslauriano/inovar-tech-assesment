import { render } from '@testing-library/react';
import React from 'react';

import Avatar from '@/components/Avatar';

describe('Avatar Component', () => {
  it('should render with default values', () => {
    const { container } = render(<Avatar />);
    const avatarElement = container.querySelector('.relative');

    expect(avatarElement).toBeInTheDocument();
  });

  it('should render with a specified name', () => {
    const { getByText } = render(<Avatar name='John Doe' />);

    expect(getByText('JD')).toBeInTheDocument();
  });

  it('should apply custom class name', () => {
    const { container } = render(<Avatar className='custom-class' />);
    const avatarElement = container.querySelector('.custom-class');

    expect(avatarElement).toBeInTheDocument();
  });

  it('should render notifications count', () => {
    const { getByText } = render(<Avatar notificationsCount={5} />);

    expect(getByText('5')).toBeInTheDocument();
  });

  it('should not render notifications count when it is zero', () => {
    const { container } = render(<Avatar notificationsCount={0} />);
    const notificationElement = container.querySelector('.bg-red-600');

    expect(notificationElement).toBeNull();
  });
});
