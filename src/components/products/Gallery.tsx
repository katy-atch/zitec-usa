import { useMemo } from 'react';

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import './gallery.css';

// 🧩 Import all .png images under each product folder
const allProductImages = import.meta.glob<{ default: string }>(
  '../../assets/products/*/*.png',
  { eager: true }
);

// 🔍 Get images for a given product
const getProductImages = (productKey: string): string[] => {
  return Object.entries(allProductImages)
    .filter(([path]) => path.includes(`/products/${productKey}/`))
    .map(([, module]) => module.default);
};

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
