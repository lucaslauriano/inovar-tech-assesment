import { render } from '@testing-library/react';
import React from 'react';

import Icon from '@/components/Icon';

describe('Icon Component', () => {
  it('should render an icon with the default class', () => {
    const { container } = render(<Icon icon='plus' />);
    const iconElement = container.querySelector('.w-6.h-6');

    expect(iconElement).toBeInTheDocument();
  });

  // it('should render the specified icon', () => {
  //   const { container } = render(<Icon icon='search' />);
  //   const searchIconElement = container.querySelector('.SearchIcon');

  //   expect().toBeInTheDocument();
  // });

  it('should apply the specified custom class', () => {
    const { container } = render(
      <Icon icon='menu_bars' className='custom-class' />,
    );
    const iconElement = container.querySelector('.custom-class');

    expect(iconElement).toBeInTheDocument();
  });

  // it('should render the "arrow_up" icon', () => {
  //   const { container } = render(<Icon icon='arrow_up' />);
  //   const arrowUpIconElement = container.querySelector('.ArrowUpIcon');

  //   expect(arrowUpIconElement).toBeInTheDocument();
  // });

  // it('should render the "exchange_arrows" icon', () => {
  //   const { container } = render(<Icon icon='exchange_arrows' />);
  //   const exchangeArrowsIconElement =
  //     container.querySelector('.ExchangeArrowIcon');

  //   expect(exchangeArrowsIconElement).toBeInTheDocument();
  // });
});
