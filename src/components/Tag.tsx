import { classNames } from '@/app/utils/classNames';
import Icon, { IconName } from '@/components/Icon';

type ChipProps = {
  iconLeft?: IconName;
  iconRight?: IconName;
  entity?: string;
  label?: string;
  className?: string;
};

const statusInfo = {
  CASE_STUDY: {
    text: 'Case Study',
    bgColor: 'bg-yellow-600',
  },
  OPINION: {
    text: 'Opinion',
    bgColor: 'bg-blue-600',
  },
  PRODUCT_DESING: {
    text: 'Product Desing',
    bgColor: 'bg-green-500',
  },
  UX_THEORY: {
    text: 'Ux Theory',
    bgColor: 'bg-sky-400',
  },
} as any;

export default function Tag({
  iconLeft,
  iconRight,
  label,
  entity = '',
  className = '',
}: ChipProps) {
  return (
    <div
      className={classNames(
        'inline-flex rounded-full max-w-[110px] bg-gray-50 h-[24px] pl-1 items-center text-white',
        entity ? statusInfo[entity].bgColor : 'bg-gray-50',
        className,
      )}
    >
      {iconLeft && <Icon icon={iconLeft} className='w-[16px] h-[16px]' />}
      <span className=' col-span-1 overflow-hidden text-ellipsis justify-center whitespace-nowrap text-[12px] font-light pr-2 pl-1'>
        {label
          ? label
          : (entity && statusInfo[entity].text) || 'Unknown Entity'}
      </span>
      {iconRight && (
        <Icon icon={iconRight} className='w-[16px] h-[16px] mr-1' />
      )}
    </div>
  );
}
