'use client';

import Icon from '@/components/Icon';
import Logo from '@/components/Logo';

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto'>{children}</div>

        <div className='mt-2 flex items-center justify-between'>
          <div className='flex'>
            <Logo />
            <div className='-ml-1'>
              <p className='text-[10px] font-semibold text-gray-800'>
                The UX Library
              </p>
              <p className='text-[10px] font-normal text-gray-400'>
                Comunity curated design content & discussion
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-x-4'>
            <div className='flex text-[10px] font-semibold text-gray-600 items-center gap-1 h-4'>
              <Icon icon='facebook' className='h-3 w-3' />
              <p>Facebook</p>
            </div>
            <div className='flex text-[10px] font-semibold text-gray-600 items-center gap-1 h-4'>
              <Icon icon='twitter' className='h-3 w-3' />
              <p>Twitter</p>
            </div>
            <div className='flex flex-col gap-x-4 items-center'>
              <div className='flex flex-row gap-x-1 items-center'>
                <p className='text-[10px] font-normal text-red-800'>About</p>
                <p className='text-[10px] font-normal text-red-800'>Contact</p>
                <p className='text-[10px] font-normal text-red-800'>Sign In</p>
              </div>
              <p className='text-[10px] font-semibold text-gray-300  justify-end'>
                © 2014 - The UX Library
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsLayout;
