import { Header } from '@/shared/components'
import { BannerMessage } from '@/presentation/components'

export const HomeFirstSection = () => {
  return (
    <div className="relative w-full h-[100svh] flex  bg-home-background bg-cover  bg-no-repeat bg-gray-900 items-center justify-center overflow-hidden">
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
