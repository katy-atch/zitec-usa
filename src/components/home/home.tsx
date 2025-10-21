import { FeaturedProducts } from './FeaturedProducts';
import { TitleOverlay } from './TitleOverlay';

export const Home = () => (
  <div>
    <TitleOverlay />
    <div className={'m-5'}>
      <FeaturedProducts />
    </div>
  </div>
);
