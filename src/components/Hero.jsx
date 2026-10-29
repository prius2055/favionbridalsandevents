import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import { HERO_SLOTS } from '../data/site';
import './Hero.css';

// One arch that slowly fades between its photos.
function Slot({ photos, ratio, delay }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (photos.length < 2) return undefined;
    const t = setInterval(() => setI((n) => (n + 1) % photos.length), delay);
    return () => clearInterval(t);
  }, [photos.length, delay]);
  return (
    <div className="arch hero__slot" style={{ aspectRatio: ratio }}>
      {photos.map((p, k) => <img key={p.src} src={p.src} alt={k === i ? p.alt : ''} aria-hidden={k !== i} className={k === i ? 'is-on' : ''} loading={k === 0 ? 'eager' : 'lazy'} />)}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1>Your Dream Wedding. Your Perfect Look. Your Favion Experience.</h1>
          <p>Discover exquisite bridal gowns, beautiful accessories, and thoughtful event planning designed to make your special moments unforgettable.</p>
          <div className="btn-row">
            <Link className="btn" to="/gowns">Explore Our Gowns</Link>
            <Link className="btn btn--ghost" to="/event-planning">Plan Your Wedding</Link>
            <WhatsAppButton>Chat with Favion on WhatsApp</WhatsAppButton>
          </div>
        </div>
        <div className="hero__arches">
          {HERO_SLOTS.map((s, n) => (
            <div key={n} className={`hero__a hero__a--${n + 1}`}><Slot photos={s.photos} ratio={s.ratio} delay={6000 + n * 1500} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
