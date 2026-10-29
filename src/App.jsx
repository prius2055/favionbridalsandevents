import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import ProductDetail from './pages/ProductDetail';
import Venues from './pages/Venues';
import VenueDetail from './pages/VenueDetail';
import ServicePage from './pages/ServicePage';
import EventPlanning from './pages/EventPlanning';
import { Gallery, About, Contact, Faq, Policy, NotFound } from './pages/InfoPages';
import { GROUPS } from './data/site';

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bridal-collection" element={<Catalogue title="Bridal Collection" intro="Wedding gowns to rent, in every silhouette. Choose a style, then enquire with your date and size." slugs={['wedding-gowns']} />} />
          <Route path="/bridal-party" element={<Catalogue title="Bridesmaids and Bridal Party" intro="Bridesmaid robes and coordinated bridal train outfits." slugs={GROUPS.party} />} />
          <Route path="/accessories" element={<Catalogue title="Bridal Accessories" intro="Tiaras, shoes, jewellery, bouquets and robes to complete the look." slugs={GROUPS.accessories} />} />
          <Route path="/category/:slug" element={<Catalogue />} />
          <Route path="/search" element={<Catalogue title="Search results" slugs={null} />} />
          <Route path="/product/:ref" element={<ProductDetail />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/:slug" element={<VenueDetail />} />
          <Route path="/event-planning" element={<EventPlanning />} />
          <Route path="/event-planning/:service" element={<ServicePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/policy/:slug" element={<Policy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
