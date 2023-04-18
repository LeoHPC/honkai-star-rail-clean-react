import { PlayButtonIcon } from '@/presentation/assets'

export const BannerMessage = () => {
  return (
    <section className="bg-gray-950 w-screen p-8 flex flex-col items-center justify-center gap-6 bg-opacity-40">
      <button
        aria-label="Watch our gameplay trailer on YouTube!"
        title="Watch our gameplay trailer on YouTube!"
        className="hover:brightness-110 transition-all border-none outline-none focus-visible:outline-red-600 focus-visible:outline-4">
        <PlayButtonIcon />
      </button>
      <h1
        className="lg:text-6xl md:text-4xl text-2xl text-center font-audio text-gray-200 font-medium"
        data-testid="home-message">
        May This Journey Lead Us Starward
      </h1>
    </section>
  )
}
