import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Home } from './components/home/home.tsx';
import { About } from './components/about/about.tsx';
import { Contact } from './components/contact/contact.tsx';
import { Navigation } from './components/navigation.tsx';

import './index.css';
import { Footer } from './components/common/Footer.tsx';
import { NotFound } from './components/notFound.tsx';
import { ProductPage } from './components/products/Product.tsx';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', position: 'relative' }} >
        <Navigation />
        <Routes>
          <Route path="/zitec-usa">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route path="products/:productKey" element={<ProductPage />} /> {/* For demo purposes */}

            <Route path="*" element={<NotFound />} />
          </Route>
          {/* Temp - GitHub pages requires this as the base path */}
          <Route path="*" element={<Navigate to="/zitec-usa" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
