import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ArchImage from '../components/ArchImage';
import ProductCard from '../components/ProductCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { PRODUCTS, PHOTOS } from '../data/site';

const TILES = [
  { to: '/gowns', title: 'Gowns', text: 'Wedding gowns to rent in every silhouette.', photo: 8 },
  { to: '/bridal-robes', title: 'Bridal Robes', text: 'Tulle robes for getting-ready photographs.', photo: 7 },
  { to: '/bridesmaid', title: 'Bridesmaid', text: 'Robes and coordinated bridal train outfits.', photo: 2 },
  { to: '/accessories', title: 'Bridal Accessories', text: 'Tiaras, shoes, jewellery and bouquets.', photo: 6 },
  { to: '/venues', title: 'Wedding Venues', text: 'Venues for ceremonies and receptions.', photo: 4 },
  { to: '/event-planning', title: 'Event Planning', text: 'Planning, decor and coordination.', photo: 5 },
];
const STEPS = ['Choose your style', 'Send your date and size on WhatsApp', 'Favion confirms availability and terms', 'Collect, celebrate and return'];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section section--blush">
        <div className="container">
          <h2>Everything for your wedding, in one place</h2>
          <div className="grid grid--tiles">
            {TILES.map((t, i) => (
              <Link key={t.to} to={t.to} className="tile">
                <ArchImage label={t.title} tone={i} ratio="4 / 4.6" src={PHOTOS[t.photo]?.src} alt={PHOTOS[t.photo]?.alt} />
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Featured gowns</h2>
          <div className="grid grid--4">{PRODUCTS.filter((p) => p.category === 'wedding-gowns').slice(0, 4).map((p, i) => <ProductCard key={p.ref} product={p} tone={i} />)}</div>
          <p className="more"><Link className="btn btn--ghost" to="/gowns">See all gowns</Link></p>
        </div>
      </section>
      <section className="section section--plum">
        <div className="container">
          <h2>How renting works</h2>
          <ol className="steps">{STEPS.map((s) => <li key={s}>{s}</li>)}</ol>
          <WhatsAppButton className="btn btn--light">Start an enquiry on WhatsApp</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
