import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

// Components
import { ExternalLinkIcon } from '@/ui'
// Types
import { Props } from './types'

export const VideoDialog = ({ isOpen, closeModal }: Props) => {
  const initialFocus = useRef(null)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={closeModal} initialFocus={initialFocus}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center relative">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full md:max-w-2xl lg:min-h-[600px] lg:max-w-4xl transform rounded-2xl bg-gray-900 p-6 shadow-xl transition-all">
                <Dialog.Title as="h2" className="text-lg sm:text-2xl font-medium text-gray-200 mb-6 font-audio">
                  Checkout our newest video on <span className="text-red-600">Youtube</span>!
                </Dialog.Title>

                <a
                  href="https://www.youtube.com/watch?v=yLFpFp5r0hk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-gray-200 text-right w-full flex items-center gap-1 justify-end hover:brightness-125 border-none outline-none focus-visible:outline-4 focus-visible:outline-blue-500">
                  open video in a new tab
                  <ExternalLinkIcon fillColor="rgb(229 231 235)" classNames="w-4 h-4" />
                </a>

                <button
                  onClick={closeModal}
                  className="absolute top-[-1.8rem] right-[-1.4rem] border-none outline-none focus-visible:outline-4 focus-visible:outline-blue-500"
                  aria-label="Close dialog">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="70"
                    height="70"
                    aria-hidden="true">
                    <polygon
                      fill="rgb(220 38 38)"
                      points="32.678,21.785 22.661,31.803 39.177,48.319 22.071,65.425 32.088,75.444 49.195,58.337 66.801,75.944 76.819,65.925 59.213,48.319 76.68,30.852 66.662,20.833 49.195,38.301"
                    />
                    <path
                      fill="rgb(17 24 39)"
                      d="M65.512,22.835l9.193,9.193L58.388,48.346l16.404,16.403l-9.193,9.193L49.195,57.539L33.291,73.442 l-9.192-9.193l15.903-15.903L24.598,32.942l9.192-9.193l15.404,15.404L65.512,22.835 M65.512,14.349l-4.243,4.243L49.195,30.667 L38.033,19.506l-4.243-4.243l-4.243,4.243L20.356,28.7l-4.242,4.243l4.242,4.242l11.161,11.161L19.856,60.006l-4.242,4.242 l4.242,4.243l9.192,9.193l4.243,4.243l4.243-4.243l11.661-11.661l12.161,12.161l4.243,4.243l4.243-4.243l9.193-9.193l4.243-4.243 l-4.243-4.243L66.873,48.346l12.075-12.075l4.243-4.243l-4.243-4.243l-9.193-9.193L65.512,14.349L65.512,14.349z"
                    />
                    <polygon
                      fill="rgb(17 24 39)"
                      points="65.619,87.025 49.194,70.601 35.591,84.202 28.521,77.132 49.194,56.458 65.619,72.883 73.929,64.573 57.504,48.148 78.408,27.246 85.479,34.316 71.646,48.148 88.071,64.573"
                    />
                    <rect
                      width="13"
                      height="6"
                      x="72.255"
                      y="28.841"
                      fill="rgb(17 24 39)"
                      transform="rotate(45.001 78.756 31.84)"
                    />
                  </svg>
                </button>

                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/yLFpFp5r0hk"
                  ref={initialFocus}
                  className="h-fit sm:h-72 md:h-80 lg:h-[480px] border-8 border-red-600 border-double"
                  aria-hidden="true"
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
