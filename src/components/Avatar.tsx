import { UserCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

import { classNames } from '@/app/utils/classNames';
import { getInitials } from '@/app/utils/format';

type AvatarProps = {
  src?: string;
  name?: string;
  width?: number;
  height?: number;
  className?: string;
  notificationsCount?: number;
};

export default function Avatar({
  src = '',
  name = '',
  width = 36,
  height = 36,
  className = '',
  notificationsCount = 0,
}: AvatarProps) {
  return (
    <div className='relative inline-block'>
      {!src && (
        <div
          className={classNames(
            'text-sm text-red-900 uppercase',
            width ? `w-[${width}px]` : 'w-[24px]',
            height ? `h-[${height}px]` : 'h-[24px]',
            className,
          )}
        >
          {name ? getInitials(name) : <UserCircleIcon className='h-6 w-6' />}
        </div>
      )}

      {src && (
        <Image
          src={src}
          alt='Avatar Image'
          width={width}
          height={height}
          className={classNames(
            'rounded-sm object-cover aspect-square',

            className,
          )}
        />
      )}
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
