import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import './pages/pages.css';

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
          <Route path="/gowns" element={<Catalogue title="Gowns" intro="Wedding gowns to rent in every silhouette. Choose a style, then enquire with your date and size." slugs={GROUPS.gowns} />} />
          <Route path="/bridal-robes" element={<Catalogue title="Bridal Robes" intro="Tulle robes for getting-ready photographs and bridal portraits. Enquire with your date." slugs={GROUPS.robes} />} />
          <Route path="/bridesmaid" element={<Catalogue title="Bridesmaid" intro="Bridesmaid robes and coordinated bridal train outfits." slugs={GROUPS.party} />} />
          <Route path="/accessories" element={<Catalogue title="Bridal Accessories" intro="Tiaras, shoes, jewellery and bouquets to complete the look." slugs={GROUPS.accessories} />} />
          <Route path="/bridal-collection" element={<Navigate to="/gowns" replace />} />
          <Route path="/bridal-party" element={<Navigate to="/bridesmaid" replace />} />
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
