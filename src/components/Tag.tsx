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
  'Case Study': {
    bgColor: 'bg-yellow-600',
  },
  Opinion: {
    bgColor: 'bg-blue-800',
  },
  'Product Design': {
    bgColor: 'bg-green-500',
  },
  'UX Theory': {
    bgColor: 'bg-sky-400',
  },
  Literature: {
    bgColor: 'bg-purple-400',
  },
  'UX Map': {
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
  console.log('asdasd', statusInfo[entity]);
  console.log('entity', entity);
  return (
    <div
      className={classNames(
        'inline-flex rounded-full max-w-[110px] bg-gray-50 h-[24px] pl-1 items-center text-white',
        entity ? statusInfo[entity].bgColor : '',
        className,
      )}
    >
      {iconLeft && <Icon icon={iconLeft} className='w-[16px] h-[16px]' />}
      <span className=' col-span-1 overflow-hidden text-ellipsis justify-center whitespace-nowrap text-[12px] font-light pr-2 pl-1'>
        {label ? label : entity || 'Unknown Entity'}
      </span>
      {iconRight && (
        <Icon icon={iconRight} className='w-[16px] h-[16px] mr-1' />
      )}
    </div>
  );
}
