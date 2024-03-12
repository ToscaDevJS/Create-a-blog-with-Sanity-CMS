//import type { Image } from 'sanity'
import imageUrlBuilder from '@sanity/image-url'
import { sanityClientConfig } from './client';
import { Image } from '@/sanity/types/Sanity.ImageTypes';

const builder = imageUrlBuilder(sanityClientConfig);

export function urlFor(source: Image) {
  return builder.image(source);
}

//PortableTextComponents
export const urlForImage = (source: Image) => {
  return builder?.image(source).auto('format').fit('max').url()
}
