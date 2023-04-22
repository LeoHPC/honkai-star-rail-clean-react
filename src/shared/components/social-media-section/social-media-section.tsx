// Components
import { SocialMediaIcon } from '@/ui'
// Constants
import { SOCIAL_MEDIA_DATA } from '@/utils/constants'

export const SocialMediaSection = () => {
  return (
    <section
      className="absolute bottom-0 lef-0 sm:right-0 px-1 py-2 bg-gray-900 bg-opacity-50 flex flex-row sm:flex-col gap-3"
      aria-label="Follow us on our social media!">
      {SOCIAL_MEDIA_DATA.map((media) => (
        <SocialMediaIcon key={media.name} aria={media.aria} href={media.href} icon={media.icon} name={media.name} />
      ))}
    </section>
  )
}
