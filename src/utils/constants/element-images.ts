import { ElementsEnum } from '@/domain/enum'

export const ELEMENT_IMAGES: { [key in ElementsEnum]: { image: string; alt: string } } = {
  [ElementsEnum.Imaginary]: {
    image: '/img/imaginary-element.webp',
    alt: 'Imaginary Element Icon'
  },
  [ElementsEnum.Fire]: {
    image: '/img/fire-element.webp',
    alt: 'Fire Element Icon'
  }
}
