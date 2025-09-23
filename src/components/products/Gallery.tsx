import { useState } from 'react';

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

import molt from '../../assets/products/molt/molt.png';
import molt2 from '../../assets/products/molt/molt2.png';
import molt3 from '../../assets/products/molt/molt3.png';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [molt, molt2, molt3].map((src) => {
  let width = 738,
    height = 554;

  // expected image path: image.738x554.jpg
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
    srcSet: breakpoints.map((breakpoint) => ({
      src,
      width: breakpoint,
      height: Math.round((height / width) * breakpoint),
    })),
  } as Photo;
});

export const Gallery = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className="max-w-md mx-auto space-y-4" >
        <div className=" w-full overflow-hidden rounded-md">
          <img
            src={photos[hoverIndex == -1 ? selectedIndex : hoverIndex].src}
            alt=""
            className="mb-3"
            style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
            onClick={() => setLightboxOpen(true)}
          />
        </div>
        <RowsPhotoAlbum
          photos={photos}
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
        slides={photos.map((p) => ({ src: p.src }))}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        close={() => setLightboxOpen(false)}
      />
    </>
  );
};
