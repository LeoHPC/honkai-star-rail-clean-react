import { Header } from '@/shared/components'
import { BackgroundVideo, BannerMessage } from '@/presentation/components'

export const HomeFirstSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <BackgroundVideo />

      <div className="z-10">
        <Header />
        <BannerMessage />
      </div>
    </div>
  )
}
