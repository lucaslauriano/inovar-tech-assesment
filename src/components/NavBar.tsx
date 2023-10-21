'use client';

import { useState } from 'react';

import Menu from './Menu';
import MobileMenu from './MobileMenu';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Postagens', href: '/posts' },
  { name: 'About', href: '/about' },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className='bg-white border-solid border-b-[1px] border-gray-200'
      data-testid='navbar__nav'
    >
      <Menu />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />
    </nav>
  );
};

export default NavBar;
