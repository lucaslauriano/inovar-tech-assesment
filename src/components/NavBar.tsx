'use client';

import Menu from './Menu';

const NavBar = () => {
  return (
    <nav
      className='bg-white border-solid border-b-[1px] border-gray-200'
      data-testid='navbar__nav'
    >
      <Menu />
    </nav>
  );
};

export default NavBar;
