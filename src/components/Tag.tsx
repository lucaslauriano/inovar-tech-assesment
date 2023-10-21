import { classNames } from '@/app/utils/classNames';
import Icon, { IconName } from '@/components/Icon';

type ChipProps = {
  iconLeft?: IconName;
  iconRight?: IconName;
  label?: string;
  className?: string;
};
export default function Tag({
  iconLeft,
  iconRight,
  label,
  className = '',
}: ChipProps) {
  return (
    <div
      className={classNames(
        'inline-flex rounded-full max-w-[110px] bg-gray-50 h-[24px] pl-1 items-center',
        className,
      )}
    >
      {iconLeft && <Icon icon={iconLeft} className='w-[16px] h-[16px]' />}
      <span className=' col-span-1 overflow-hidden text-ellipsis justify-center whitespace-nowrap text-[12px] font-light pr-2 pl-1'>
        {label}
      </span>
      {iconRight && (
        <Icon icon={iconRight} className='w-[16px] h-[16px] mr-1' />
      )}
    </div>
  );
}
