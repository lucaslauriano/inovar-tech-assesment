'use client';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import Filter from '@/components/Filter';
import Logo from '@/components/Logo';

const Menu = () => {
  return (
    <nav
      className='mx-auto flex max-w-3xl items-center justify-between py-6 lg:px-8 h-[84px]'
      aria-label='Global'
    >
      <Logo />
      <Divider bgColor='bg-gray-300' />
      <Filter onSearch={() => {}} />
      <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-x-4'>
        <Button
          icon='plus'
          size='sm'
          type='button'
          color='primary'
          fullWidth={false}
        >
          Add Post
        </Button>
        <Avatar notificationsCount={5} />
      </div>
    </nav>
  );
};

export default Menu;
