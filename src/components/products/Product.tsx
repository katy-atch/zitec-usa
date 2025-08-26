import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

import { productCategories, Product, ProductCategory, products } from '../../utils/products';


export const ProductPage = () => {
  const { productKey } = useParams();

  if (productKey !== 'molt') throw new Error("Go away for now.");

  const product = products[productKey];

  return (
    <Row className="justify-content-center my-5">
      <Col md={6} className="text-center">
        <h1 className="display-4">Dummy Page - Product</h1>
        <p className="lead">
          Lorem ipsum blah blah n all that good stuff
        </p>
      </Col>
    </Row>
  )
};

//https://mdbootstrap.com/docs/standard/extended/mega-menu/