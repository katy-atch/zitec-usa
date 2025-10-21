import { useMemo } from 'react';

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import './gallery.css';
import { getProductImages } from '../../utils/products';

const toImageGalleryImages = (imageSources: string[]) => {
  return imageSources.map(source => ({
    original: source,
    thumbnail: source
  }))
}

export const Gallery = ({ productKey }: { productKey: string }) => {
  const foundImages = useMemo(() => getProductImages(productKey), [productKey]);
  const imageGalleryImages = useMemo(() => toImageGalleryImages(foundImages), [foundImages]);

  if (imageGalleryImages.length === 0) {
    return <p className="text-center text-gray-500">No images found for "{productKey}".</p>;
  }

  return (
    <div className="max-w-md mx-auto space-y-4" >
      <ImageGallery items={imageGalleryImages} showPlayButton={false} />
    </div>
  );
};
