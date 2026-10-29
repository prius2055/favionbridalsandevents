import { Link } from 'react-router-dom';
import ArchImage from './ArchImage';
import WhatsAppButton from './WhatsAppButton';
import { PHOTOS } from '../data/site';
import './Hero.css';
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1>Your Dream Wedding. Your Perfect Look. Your Favion Experience.</h1>
          <p>Discover exquisite bridal gowns, beautiful accessories, and thoughtful event planning designed to make your special moments unforgettable.</p>
          <div className="btn-row">
            <Link className="btn" to="/bridal-collection">Explore the Bridal Collection</Link>
            <Link className="btn btn--ghost" to="/event-planning">Plan Your Wedding</Link>
            <WhatsAppButton>Chat with Favion on WhatsApp</WhatsAppButton>
          </div>
        </div>
        <div className="hero__arches" aria-hidden="false">
          <div className="hero__a hero__a--1"><ArchImage label="Bridal portrait" ratio="3 / 4.4" src={PHOTOS[0].src} alt={PHOTOS[0].alt} /></div>
          <div className="hero__a hero__a--2"><ArchImage label="Mermaid gown" ratio="3 / 4" src={PHOTOS[3].src} alt={PHOTOS[3].alt} /></div>
          <div className="hero__a hero__a--3"><ArchImage label="Crown and bouquet" ratio="3 / 3.4" src={PHOTOS[1].src} alt={PHOTOS[1].alt} /></div>
        </div>
      </div>
    </section>
  );
}
