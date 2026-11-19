import { useParams, Link } from 'react-router-dom';
import ArchImage from '../components/ArchImage';
import WhatsAppButton from '../components/WhatsAppButton';
import Banner from '../components/Banner';
import { SITE, PHOTOS, BANNERS, FAQS, POLICIES, POLICY_TEXT } from '../data/site';
import NotFound from './NotFound';
import { boldPrices } from '../utils/boldPrices';

export function Gallery() {
  return (
    <div className="container">
      <div className="page-head"><h1>Gallery</h1><p>A look at our gowns, accessories and events.</p></div>
      <div className="masonry section">{PHOTOS.filter((p) => p.src).map((p, i) => <ArchImage key={p.src} label={p.alt} tone={i} ratio={p.ratio || '3 / 3.8'} flat={p.flat} src={p.src} alt={p.alt} />)}</div>
    </div>
  );
}
export function About() {
  return (
    <div className="container">
      <div className="page-head"><h1>About Favion</h1></div>
      <div className="split">
        <div>
          <div className="banner-gap"><Banner image={BANNERS.celebration} ratio="16 / 9" /></div>
          <p>{SITE.name} rents gowns, bridal robes and accessories, helps couples find venues, and plans weddings and events.</p>
          <p>Tell us your date and what you have in mind on WhatsApp, and we will take it from there.</p>
          <p><WhatsAppButton>Chat with Favion on WhatsApp</WhatsAppButton></p>
        </div>
        <aside aria-labelledby="about-faq">
          <h2 id="about-faq">Frequently asked questions</h2>
          <FaqList />
        </aside>
      </div>
    </div>
  );
}
export function Contact() {
  const q = encodeURIComponent(SITE.mapsQuery || SITE.address);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
  const viewUrl = SITE.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${q}`;
  return (
    <div className="container">
      <div className="page-head"><h1>Contact</h1><p>The quickest way to reach us is WhatsApp.</p></div>
      <div className="split split--stretch">
      <div>
      <dl className="specs"><dt>Phone and WhatsApp</dt><dd><a href={`tel:${SITE.phoneLink}`}>{SITE.whatsappDisplay}</a></dd><dt>Address</dt><dd>{SITE.address}<br /><a href={viewUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></dd><dt>Hours</dt><dd>{SITE.hours}</dd></dl>
      <div className="btn-row">
        <a className="btn" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
        <WhatsAppButton>Chat with Favion on WhatsApp</WhatsAppButton>
      </div>
      </div>
      <div className="map">
        <iframe
          title="Map showing the Favion Bridals and Events shop location"
          src={`https://maps.google.com/maps?q=${q}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      </div>
    </div>
  );
}
function FaqList() {
  return <div className="faq">{FAQS.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{boldPrices(f.a)}</p></details>)}</div>;
}
export function Faq() {
  return (
    <div className="container">
      <div className="page-head"><h1>Frequently asked questions</h1></div>
      <FaqList />
    </div>
  );
}
export function Policy() {
  const { slug } = useParams();
  if (!POLICIES[slug]) return <NotFound />;
  return (
    <div className="container">
      <div className="page-head"><h1>{POLICIES[slug]}</h1></div>
      {POLICY_TEXT[slug].map((t) => <p key={t}>{t}</p>)}
      <p><Link to="/contact">Contact us</Link> with any questions.</p>
    </div>
  );
}
export { NotFound };
