import { SVGAttributes } from 'react';

import {
  PlusIcon,
  SearchIcon,
  HexagonIcon,
  ArrowUpIcon,
  MenuBarsIcon,
  ExchangeArrowIcon,
  TwitterIcon,
  FacebookIcon,
} from '@/components/Icons';
import Chat from '@/components/Icons/components/Chat';

const Icons = {
  exchange_arrows: ({ className }: SVGAttributes<{}>) => (
    <ExchangeArrowIcon className={className} />
  ),
  chat: ({ className }: SVGAttributes<{}>) => <Chat className={className} />,
  twitter: ({ className }: SVGAttributes<{}>) => (
    <TwitterIcon className={className} />
  ),
  facebook: ({ className }: SVGAttributes<{}>) => (
    <FacebookIcon className={className} />
  ),

  plus: ({ className }: SVGAttributes<{}>) => (
    <PlusIcon className={className} />
  ),
  search: ({ className }: SVGAttributes<{}>) => (
    <SearchIcon className={className} />
  ),
  menu_bars: ({ className }: SVGAttributes<{}>) => (
    <MenuBarsIcon className={className} />
  ),
  hexagon: ({ className }: SVGAttributes<{}>) => (
    <HexagonIcon className={className} />
  ),
  arrow_up: ({ className }: SVGAttributes<{}>) => (
    <ArrowUpIcon className={className} />
  ),
};

export type IconName = keyof typeof Icons;

export interface IconProps {
  icon: IconName;
  className?: string;
}

const Icon = ({ icon, className = 'w-6 h-6' }: IconProps) => {
  const IconComponent = Icons[icon];

  return (
    <span className='inline-flex items-center justify-center'>
      <IconComponent className={className} />
    </span>
  );
};

export default Icon;
