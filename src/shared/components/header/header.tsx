import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

// Components
import { ExternalHeaderLink, InternalHeaderLink } from '@/shared/components'

export const Header = () => {
  return (
    <header className="absolute left-0 top-0 w-full bg-gray-900 bg-opacity-50 sm:px-4 sm:py-2 flex justify-end">
      <nav className="sm:flex hidden">
        <ul className="flex flex-row gap-8 justify-end">
          <li>
            <ExternalHeaderLink
              label="official website"
              href="https://hsr.hoyoverse.com/en-us/home?utm_source=hsrofficalweb&utm_medium=fab&utm_campaign=button"
              aria-label="official website (opens in a new tab)"
            />
          </li>
          <li>
            <ExternalHeaderLink
              label="register now"
              href="https://hsr.hoyoverse.com/en-us/"
              aria-label="register now (opens in a new tab)"
            />
          </li>
          <li>
            <InternalHeaderLink label="characters" href="#characters" aria-label="come see our beautiful characters" />
          </li>
        </ul>
      </nav>

      <Menu as="div" className="sm:hidden relative inline-block text-left">
        <div>
          <Menu.Button
            data-testid="responsive-menu-button"
            className="inline-flex w-full justify-center bg-black bg-opacity-0 px-2 py-1 outline-none border-none focus-visible:outline-4 focus-visible:outline-fuchsia-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="36px" height="36px">
              <linearGradient
                id="EIPc0qTNCX0EujYwtxKaXa"
                x1="12.066"
                x2="34.891"
                y1=".066"
                y2="22.891"
                gradientUnits="userSpaceOnUse">
                <stop offset=".237" stopColor="#f1ba22" />
                <stop offset=".85" stopColor="#bd7b19" />
              </linearGradient>
              <path
                fill="url(#EIPc0qTNCX0EujYwtxKaXa)"
                d="M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z"
              />
              <linearGradient
                id="EIPc0qTNCX0EujYwtxKaXb"
                x1="12.066"
                x2="34.891"
                y1="12.066"
                y2="34.891"
                gradientUnits="userSpaceOnUse">
                <stop offset=".237" stopColor="#f1ba22" />
                <stop offset=".85" stopColor="#bd7b19" />
              </linearGradient>
              <path
                fill="url(#EIPc0qTNCX0EujYwtxKaXb)"
                d="M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z"
              />
              <linearGradient
                id="EIPc0qTNCX0EujYwtxKaXc"
                x1="12.066"
                x2="34.891"
                y1="24.066"
                y2="46.891"
                gradientUnits="userSpaceOnUse">
                <stop offset=".237" stopColor="#f1ba22" />
                <stop offset=".85" stopColor="#bd7b19" />
              </linearGradient>
              <path
                fill="url(#EIPc0qTNCX0EujYwtxKaXc)"
                d="M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z"
              />
            </svg>
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
    </header>
  )
}
