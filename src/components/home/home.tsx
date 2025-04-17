import { FeaturedProducts } from './FeaturedProducts';
import { TitleOverlay } from './TitleOverlay';

export const Home = () => (
  <div>
    <TitleOverlay />
    <div className={'m-3'}>
      <FeaturedProducts />
    </div>
  </div>
);
