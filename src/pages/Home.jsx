import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ArchImage from '../components/ArchImage';
import ProductCard from '../components/ProductCard';
import WhatsAppButton from '../components/WhatsAppButton';
import Banner from '../components/Banner';
import { PRODUCTS, PHOTOS, BANNERS } from '../data/site';

const TILES = [
  { to: '/gowns', title: 'Gowns', text: 'Wedding gowns to rent in every silhouette.', image: PHOTOS[8] },
  { to: '/bridal-robes', title: 'Bridal Robes', text: 'Tulle robes for getting-ready photographs.', image: PHOTOS[7] },
  { to: '/bridesmaid', title: 'Bridesmaid', text: 'Robes and coordinated bridal train outfits.', image: PHOTOS[2] },
  { to: '/accessories', title: 'Bridal Accessories', text: 'Tiaras, shoes, jewellery and bouquets.', image: PHOTOS[6] },
  { to: '/venues', title: 'Wedding Venues', text: 'Venues for ceremonies and receptions.', image: PHOTOS[4] },
  { to: '/event-planning', title: 'Event Planning', text: 'Planning, decor and coordination.', image: BANNERS.consult },
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
                <ArchImage label={t.title} tone={i} ratio="4 / 4.6" src={t.image?.src} alt={t.image?.alt} />
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
      <section className="section section--blush">
        <div className="container">
          <Banner image={BANNERS.stress} />
          <div className="plan">
            <div><h2>Too much to do? We plan. You celebrate.</h2><p>Planning, decor, venues and coordination on the day. Tell us your date and we will take it from there.</p></div>
            <div className="btn-row"><Link className="btn" to="/event-planning">Explore event planning</Link><WhatsAppButton>Chat with Favion</WhatsAppButton></div>
          </div>
        </div>
      </section>
      <section className="section section--plum">
        <div className="container">
          <h2>How renting works</h2>
          <ol className="steps">{STEPS.map((s) => <li key={s}>{s}</li>)}</ol>
          <WhatsAppButton className="btn btn--light">Start an enquiry on WhatsApp</WhatsAppButton>
        </div>
      </section>
      <Banner full image={BANNERS.celebration} ratio="16 / 7" mobileRatio="4 / 5">
        <h2>Let’s make your special day unforgettable.</h2>
        <div className="btn-row"><Link className="btn btn--light" to="/gowns">Explore our gowns</Link><WhatsAppButton>Chat with Favion</WhatsAppButton></div>
      </Banner>
    </>
  );
}
