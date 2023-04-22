import { ElementsEnum } from '@/domain/enum'

export const ELEMENT_IMAGES: { [key in ElementsEnum]: { image: string; alt: string } } = {
  [ElementsEnum.Imaginary]: {
    image: '/img/imaginary-element.webp',
    alt: 'Imaginary Element Icon'
  },
  [ElementsEnum.Fire]: {
    image: '/img/fire-element.webp',
    alt: 'Fire Element Icon'
  },
  [ElementsEnum.Ice]: {
    image: '/img/ice-element.webp',
    alt: 'Ice Element Icon'
  },
  [ElementsEnum.Wind]: {
    image: '/img/wind-element.webp',
    alt: 'Wind Element Icon'
  }
}
