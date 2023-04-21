import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

// Components
import { MenuButton } from '@/shared/components/header/assets/menu-button'

export const ResponsiveMenu = (): JSX.Element => {
  return (
    <Menu as="div" className="sm:hidden relative inline-block text-left">
      <div>
        <Menu.Button
          data-testid="responsive-menu-button"
          aria-label="menu"
          className="inline-flex w-full justify-center bg-black bg-opacity-0 px-2 py-1 outline-none border-none focus-visible:outline-4 focus-visible:outline-fuchsia-500">
          <MenuButton />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 w-screen origin-top-right bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://hsr.hoyoverse.com/en-us/home?utm_source=hsrofficalweb&utm_medium=fab&utm_campaign=button"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="responsive-menu-official-website"
                  aria-label="official website (opens in a new tab)"
                  className={`${
                    active ? 'bg-yellow-500 text-gray-900' : 'text-gray-200 bg-gray-700'
                  } group flex w-full items-center px-2 py-1 gap-1 text-base font-semibold tracking-widest mb-1`}>
                  Official Website
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://hsr.hoyoverse.com/en-us/"
                  data-testid="responsive-menu-register-now"
                  aria-label="register now (opens in a new tab)"
                  className={`${
                    active ? 'bg-yellow-500 text-gray-900' : 'text-gray-200 bg-gray-700'
                  } group flex w-full items-center px-2 py-1 text-base font-semibold tracking-widest mb-1`}>
                  Register Now
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#characters"
                  data-testid="responsive-menu-characters"
                  aria-label="come see our beautiful characters"
                  className={`${
                    active ? 'bg-yellow-500 text-gray-900' : 'text-gray-200 bg-gray-700'
                  } group flex w-full items-center px-2 py-1 text-base font-semibold tracking-widest`}>
                  Characters
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
