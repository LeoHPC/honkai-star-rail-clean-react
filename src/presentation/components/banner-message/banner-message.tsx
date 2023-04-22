import { Fragment, useState } from 'react'

import { PlayButtonIcon } from '@/presentation/assets'
import { VideoDialog } from '@/presentation/components'

const useBannerMessage = () => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return { isOpen, openModal, closeModal }
}

export const BannerMessage = () => {
  const { isOpen, closeModal, openModal } = useBannerMessage()

  return (
    <>
      <section className="md:bg-gray-950 w-screen p-8 flex flex-col items-center justify-center gap-6 md:bg-opacity-40">
        <button
          onClick={openModal}
          title="Watch our gameplay trailer on YouTube!"
          aria-label="Watch our gameplay trailer on YouTube! (opens dialog)"
          data-testid="open-dialog-button"
          className="hover:brightness-110 transition-all border-none outline-none focus-visible:outline-fuchsia-500 focus-visible:outline-4">
          <PlayButtonIcon />
        </button>
        <h1
          className="bg-gray-900 md-bg-none bg-opacity-60 md:bg-opacity-0 w-screen px-4 py-2 md:p-0 lg:text-6xl md:text-4xl text-2xl text-center font-audio text-gray-200 font-medium"
          data-testid="home-message">
          May This Journey Lead Us Starward
        </h1>
      </section>

      <VideoDialog isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}
