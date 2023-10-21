import Icon from '@/components/Icon';

export default function Logo() {
  return (
    <div className='flex items-center justify-center pr-4'>
      <Icon icon='hexagon' className='h-7 w-7 text-red-700' />
      <span className='mt-[2px] text-[10px] font-bold tracking-tight absolute text-white'>
        UX
      </span>
    </div>
  );
}
