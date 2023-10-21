import Image from 'next/image';

import { classNames } from '@/app/utils/classNames';

const USER_IMAGE =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

type AvatarProps = {
  width?: number;
  height?: number;
  className?: string;
  notificationsCount?: number;
};

export default function Avatar({
  width = 36,
  height = 36,
  className = '',
  notificationsCount = 0,
}: AvatarProps) {
  return (
    <div className='relative inline-block'>
      <Image
        width={width}
        height={height}
        className={classNames('rounded-sm', className)}
        alt='Avatar Image'
        src={USER_IMAGE}
      />
      {notificationsCount > 0 && (
        <div className='absolute items-center bottom-[11px] -left-2 block rounded-sm '>
          <span className='block text-white font-semibold text-center items-center text-[9px] h-[13px] w-[13px] rounded-sm bg-red-600'>
            {notificationsCount}
          </span>
        </div>
      )}
    </div>
  );
}
