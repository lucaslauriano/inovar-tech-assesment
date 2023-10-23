'use client';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { useFilterStore } from '@/stores/useFilterStore';

export default function Filter() {
  const { searchTerms, setSearchTerms } = useFilterStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerms(newSearchTerm);
  };

  return (
    <>
      <div className='flex pl-4'>
        <Button
          icon='menu_bars'
          type='button'
          size='sm'
          divider={false}
          onClick={() => {}}
          fullWidth={false}
          className=' inline-flex items-center justify-center rounded-[3px] pl-[5px] pr-[5px]'
          appearance='outlined'
        />
      </div>
      <div className='pl-4 hidden lg:flex lg:gap-x-12'>
        <div className='relative rounded-md shadow-sm'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <Icon
              icon='search'
              className='h-4 w-4 text-gray-400'
              aria-hidden='true'
            />
          </div>
          <input
            type='search'
            value={searchTerms}
            onChange={handleInputChange}
            className='bg-gray-200 block w-full rounded-[3px] border-0 py-1.5 pl-10 pr-2  text-gray-800 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-3 focus:ring-inset focus:none sm:text-sm sm:leading-6'
            placeholder=''
          />
        </div>
      </div>
    </>
  );
}
