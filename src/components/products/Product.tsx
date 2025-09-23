import { Container, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useMemo, useState } from 'react';

import { Product, products } from '../../utils/products';

import { Gallery } from './Gallery';


export const ProductPage = () => {
  const { productKey } = useParams();

  if (productKey !== 'molt') throw new Error("Go away for now.");
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useMemo(() => {
    setProduct(products.find(p => p.key === productKey));
  }, [productKey]);

  const formatPartNumbers = () => {
    if (!product?.partNumber && !product?.nationalStockNumber) return null;

    return (
      <p>
        {product?.nationalStockNumber && (
          <>
            <strong>NSN:</strong> {product.nationalStockNumber}
            <br />
          </>
        )}
        {product?.partNumber && (
          <>
            <strong>P/N:</strong> {product.partNumber}
          </>
        )}
      </p>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center m-5">
        <Col md={7}>
          <Gallery />
        </Col>
        <Col md={5}>
          <h2 style={{ color: '#122289' }}>{product?.name}</h2>
          {formatPartNumbers()}
          <p style={{ whiteSpace: 'pre-line' }}>
            <div dangerouslySetInnerHTML={{ __html: product?.description || '' }} />
          </p>
        </Col>
      </Row>
    </Container>
  );
};
