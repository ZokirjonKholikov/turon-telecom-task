import { Fragment } from 'react';
import { Transition, Popover } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from '../Logo';
import { navigation } from './helper';
import Item from './Item';

export default function Navbar() {
  return (
    <div className='min-h-full shadow-sm'>
      <Popover>
        <div className='relative  lg:py-6 lg:w-full lg:px-20 px-5 py-2'>
          <nav
            className='relative flex items-center justify-between sm:h-10 lg:justify-start'
            aria-label='Global'
          >
            <div className='flex items-center flex-grow '>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <NavLink to='/'>
                  <span className='sr-only'>Workflow</span>
                  <Logo />
                </NavLink>
                <div className='-mr-2 flex items-center md:hidden'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Open main menu</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
              {navigation.map((item) => (
                <Item name={item.name} href={item.href} key={item.name} />
              ))}
              <NavLink
                to='#'
                className='px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-400 hover:bg-orange-300 md:py-2 md:text-lg md:px-9'
              >
                Get Started
              </NavLink>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          >
            <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
              <div className='px-5 pt-4 flex items-center justify-between'>
                <div>
                  <Logo />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close main menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <Item name={item.name} href={item.href} key={item.name} />
                ))}
              </div>
              <NavLink
                to='#'
                className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
              >
                Getting Started
              </NavLink>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
