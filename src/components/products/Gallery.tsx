import { useState, useMemo } from 'react';

import type { Photo } from 'react-photo-album';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

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

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const toPhotos = (foundImages: string[]): Photo[] =>
  foundImages.map((src) => {
    let width = 738,
      height = 554;

    const imgProperties = src.split('.');

    if (imgProperties.length > 2) {
      const [w, h] = imgProperties[1].split('x');
      width = parseInt(w, 10);
      height = parseInt(h, 10);
    }

    return {
      src,
      width,
      height,
      srcSet: breakpoints.map((bp) => ({
        src,
        width: bp,
        height: Math.round((height / width) * bp),
      })),
    };
  });

export const Gallery = ({ productKey }: { productKey: string }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // 🧠 Memoize for performance
  const foundImages = useMemo(() => getProductImages(productKey), [productKey]);
  const photoList = useMemo(() => toPhotos(foundImages), [foundImages]);

  if (photoList.length === 0) {
    return <p className="text-center text-gray-500">No images found for "{productKey}".</p>;
  }

  return (
    <>
      <div className="max-w-md mx-auto space-y-4" >
        <div className=" w-full overflow-hidden rounded-md">
          <img
            src={photoList[hoverIndex == -1 ? selectedIndex : hoverIndex].src}
            alt=""
            className="mb-3"
            style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
            onClick={() => setLightboxOpen(true)}
          />
        </div>
        <RowsPhotoAlbum
          photos={photoList}
          render={{
            image: (imageProps, { index }) => (
              <div
                onClick={() => {
                  setSelectedIndex(index);
                  setLightboxOpen(true);
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(-1)}
              >
                <img {...imageProps} />
              </div>
            ),
          }}
        />

      </div>
      <Lightbox
        open={lightboxOpen}
        index={selectedIndex}
        slides={photoList.map((p) => ({ src: p.src }))}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        close={() => setLightboxOpen(false)}
      />
    </>
  );
};
