'use client';

import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';

import { classNames } from '@/app/utils/classNames';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { useFilterStore } from '@/stores/useFilterStore';

export default function Filter() {
  const { searchTerms, setSearchTerms } = useFilterStore();
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'Product Design',
    'UX Theory',
    'UX Map',
    'Literature',
    'Opinion',
    'Case Study',
  ];
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerms({ ...searchTerms, inputTerm: newSearchTerm, type: 'title' });
  };
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className='flex pl-4' id='content'>
        <Button
          icon='menu_bars'
          type='button'
          size='sm'
          divider={false}
          onClick={() => setOpen(!open)}
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
            value={searchTerms.inputTerm}
            onChange={handleInputChange}
            className='bg-gray-200 block w-full rounded-[3px] border-0 py-1.5 pl-10 pr-2  text-gray-800 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-3 focus:ring-inset focus:none sm:text-sm sm:leading-6'
            placeholder=''
          />
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' onClose={setOpen} className='relative z-10'>
          <div
            className={classNames(
              'fixed inset-0 overflow-hidden ',
              open ? 'bg-gray-500 bg-opacity-75 transition-opacity' : '',
            )}
          >
            <div className='pointer-events-none fixed inset-y-0 -left-[300px] flex max-w-full pr-10 '>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-0'
                enterTo='translate-x-[300px]'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-[300px]'
                leaveTo='translate-x-0'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-[300px]'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                    <div className='px-4 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                            onClick={() => setOpen(false)}
                          >
                            <span className='absolute -inset-2.5' />
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                        <Dialog.Title className='text-base font-semibold leading-6 text-gray-900'>
                          Filter
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                      <label
                        htmlFor='location'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Category
                      </label>
                      <select
                        id='location'
                        name='location'
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        defaultValue=''
                      >
                        <option key='' value=''>
                          All
                        </option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='px-4 sm:px-6 gap-2'>
                      <Button
                        type='button'
                        size='sm'
                        fullWidth={true}
                        onClick={() => {
                          setSearchTerms({
                            ...searchTerms,
                            filterTerm: selectedCategory,
                            type: 'category',
                          });
                          setOpen(false);
                        }}
                      >
                        Done
                      </Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
