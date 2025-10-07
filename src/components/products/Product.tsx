import { Container, Col, Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router';
import { useMemo } from 'react';

import { Product, products } from '../../utils/products';
import colors from '../../utils/colors.ts';

import { Gallery } from './Gallery.tsx';

export const ProductPage = () => {
  const { productKey } = useParams();
  const navigate = useNavigate();

  const product: Product | undefined = useMemo(() => products.find(p => p.key === productKey), [productKey]);

  if (!product) {
    navigate("/zitec-usa")
  }

  const formatPartNumbers = () => {
    if (!product?.partNumber && !product?.nationalStockNumber && !product?.zitecPartNumber) return null;

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
            <br />
          </>
        )}
        {product?.zitecPartNumber && (
          <>
            <strong>ZITEC P/N:</strong> {product.zitecPartNumber}
            <br />
          </>
        )}
      </p>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center m-5">
        <Col md={7}>
          <Gallery productKey={productKey || ''} />
        </Col>
        <Col md={5}>
          <h2 style={{ color: colors.primary }}>{product?.name}</h2>
          {formatPartNumbers()}
          <p style={{ whiteSpace: 'pre-line' }}>
            <div dangerouslySetInnerHTML={{ __html: product?.description || '' }} />
          </p>
        </Col>
      </Row>
    </Container>
  );
};
