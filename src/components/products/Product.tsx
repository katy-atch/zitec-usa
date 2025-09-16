import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

import { Product, products } from '../../utils/products';

import { useState } from "react";

import type { Photo } from "react-photo-album";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import molt from "../../assets/products/molt/molt.jpg";
import molt2 from "../../assets/products/molt/molt2.jpg";
import molt3 from "../../assets/products/molt/molt3.jpg";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [molt, molt2, molt3].map(src => {
  let width = 738, height = 554;

  // expected image path: image.738x554.jpg
  const imgProperties = src.split('.');

  if (imgProperties.length > 2) {
    const [w, h] = imgProperties[1].split('x');
    width = parseInt(w, 10);
    height = parseInt(h, 10);
  }

  return {
    src, width, height,
    srcSet: breakpoints.map((breakpoint) => ({
      src,
      width: breakpoint,
      height: Math.round((height / width) * breakpoint),
    })),
  } as Photo;
})

export const ProductPage = () => {
  const { productKey } = useParams();
  const [index, setIndex] = useState(-1);

  if (productKey !== 'molt') throw new Error("Go away for now.");

  const product: Product | undefined = products.find(p => p.key === productKey);

  return (
    <>
      <Row className="justify-content-center my-5">
        <Col md={6} className="text-center">
          <h1 className="display-4">{product?.name}</h1>
          <p className="lead">
            {product?.description || 'Lorem ipsum blah blah n all that good stuff'}
          </p>
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <RowsPhotoAlbum
            photos={photos}
            onClick={({ index }) => setIndex(index)}
          />
          <Lightbox
            open={index >= 0}
            index={index}
            slides={photos.map(p => ({ src: p.src }))}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            close={() => setIndex(-1)}
          />
        </Col>
      </Row>

    </>
  )
};
