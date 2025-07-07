import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './components/home/home.tsx';
import { About } from './components/about/about.tsx';
import { Contact } from './components/contact/contact.tsx';
import { Navigation } from './components/navigation.tsx';

import './index.css';
import 'yet-another-react-lightbox/styles.css';
import { Footer } from './components/common/Footer.tsx';
import { NotFound } from './components/notFound.tsx';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
