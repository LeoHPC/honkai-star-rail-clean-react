import { Header } from '@/shared/components'
import { BackgroundVideo, BannerMessage } from '@/presentation/components'

export const HomeFirstSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <BackgroundVideo />

      <div className="z-10">
        <Header />
        <BannerMessage />
        <img
          src="./img/hsr-logo.webp"
          alt="Honkai Star Rail Game Logo"
          className="sm:flex hidden absolute bottom-4 left-2"
          width={216}
          height={110}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
