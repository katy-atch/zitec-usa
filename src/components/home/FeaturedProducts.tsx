import { useMemo } from 'react';
import { Container, Row } from 'react-bootstrap';
import { getProductImages, Product, products } from '../../utils/products';
import { FeaturedProductCard } from './FeaturedProductCard';
import '../common/common.css';
import colors from '../../utils/colors';

export const FeaturedProducts = () => {
  const featuredProductKeys = ["molt", "20mm-gun-stand", "munitions-table"];

  const featuredProducts = useMemo(() => {
    return featuredProductKeys.map(key => {
      const product: Product | undefined = products.find(p => p.key === key);
      const productImg = product ? getProductImages(product.key)[0] : undefined;
      if (product && productImg) {
        return {
          ...product,
          imgSrc: productImg
        };
      }
    });
  }, [featuredProductKeys]);

  console.log('Featured Products:', featuredProducts);

  return (
    <Container>
      <h4 className="text-center" style={{ color: colors.primary }}>Featured Products</h4>
      <p className="lead text-center">Check out some of our most popular products below. For more information, contact us directly <span><a className="zitec-link" href="/contact">here</a></span>.</p>
      <Row>
        {featuredProducts.map((product, index) => product ? (
          <div key={index} className="col-sm-6 col-md-4 my-4">
            <FeaturedProductCard
              key={index}
              src={product.imgSrc}
              title={product.name}
              text={product.description ? product.description.substring(0, 100) + '...' : 'No description available.'}
              buttonText="View Product"
              buttonLink={`products/${product.key}`}
            />

          </div>
        ) : null)}
      </Row>
    </Container>
  );
};
