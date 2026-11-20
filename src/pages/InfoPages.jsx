import { useParams, Link } from 'react-router-dom';
import ArchImage from '../components/ArchImage';
import WhatsAppButton from '../components/WhatsAppButton';
import Banner from '../components/Banner';
import { SITE, PHOTOS, BANNERS, FAQS, POLICIES, POLICY_CONTENT } from '../data/site';
import Testimonials from '../components/Testimonials';
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
const OFFERS = [
  { to: '/gowns', title: 'Wedding gown rental and sales', text: 'Gowns in a wide range of silhouettes, with styles for different body types, shapes and sizes.' },
  { to: '/accessories', title: 'Accessories and wedding rings', text: 'Tiaras, shoes, jewellery, bouquets and rings to complete your look.' },
  { to: '/bridal-robes', title: 'Robes for every shoot', text: 'Bridal robes for getting-ready photographs, and robes for birthday shoots and baby showers.' },
  { to: '/contact', title: 'Bridal makeup and hair styling', text: 'Ask us about makeup and hair styling so every detail of your look comes together.' },
  { to: '/venues', title: 'Wedding venues', text: 'Venues for your ceremony and reception, matched to your guest list and style.' },
  { to: '/event-planning', title: 'Event planning and consultation', text: 'Planning, decor and coordination, from the first idea to the last dance.' },
];
const VALUES = [
  { title: 'Perfection', text: 'We look closely at every detail, from the finish of a gown to the way it sits on you, because small details make the difference on your day.' },
  { title: 'Excellence', text: 'Beautiful gowns and accessories, presented with care and served with professionalism from your first message to the day you return your dress.' },
  { title: 'Customer satisfaction', text: 'We listen first, then guide. Your confidence and comfort on your wedding day is how we measure our work.' },
];
const PROCESS = [
  ['Choose your style', 'Browse our gowns and send your event date on WhatsApp.'],
  ['Book with confidence', 'Provide your passport photograph and invitation card or social media page. Full payment secures your dress.'],
  ['Check everything together', 'We go through the dress and every item with you at pick-up. A refundable caution fee applies.'],
  ['Celebrate and return', 'Return the dress by Tuesday. Your caution fee is refunded after inspection.'],
];
export function About() {
  const dest = encodeURIComponent(SITE.mapsQuery || SITE.address);
  return (
    <>
      <div className="container">
        <div className="page-head about-hero">
          <p className="eyebrow">About Favion Bridals and Events</p>
          <h1>Perfection, excellence and your complete satisfaction</h1>
          <p className="lead">{SITE.name} brings together bridal gowns, accessories, makeup and styling, venues and event planning, so you can prepare for your wedding with one trusted team.</p>
        </div>
        <div className="split">
          <div>
            <div className="banner-gap"><Banner image={BANNERS.celebration} ratio="16 / 9" /></div>
            <h2 className="h-sm">Our story</h2>
            <p>We believe a wedding should feel beautiful from the very first fitting to the final dance. That is why we give close attention to how you look, how you feel and how smoothly everything comes together.</p>
            <p>Our collection includes gowns for a wide range of body types, shapes and sizes. Whatever you have in mind, our team will help you find the silhouette that suits you best, so you feel confident and comfortable on your wedding day.</p>
            <p>We keep our process clear and fair. Your dress and every item are checked with you at pick-up and again on return, and our terms are explained before you book, so there are no surprises.</p>
            <p className="btn-row"><WhatsAppButton>Chat with Favion on WhatsApp</WhatsAppButton><Link className="btn btn--ghost" to="/policy/rental-terms">Read our rental terms</Link></p>
          </div>
          <aside aria-labelledby="about-faq">
            <h2 id="about-faq" className="h-sm">Frequently asked questions</h2>
            <FaqList />
          </aside>
        </div>
      </div>

      <section className="section section--blush">
        <div className="container">
          <h2>What we offer</h2>
          <div className="grid grid--3">
            {OFFERS.map((o) => (
              <Link key={o.title} to={o.to} className="card offer">
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                <span className="offer__more">Find out more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our promise to every bride</h2>
          <div className="grid grid--3">
            {VALUES.map((v) => (
              <div key={v.title} className="value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials tone="section--blush" />

      <section className="section section--plum">
        <div className="container">
          <h2>How renting works</h2>
          <ol className="steps process">
            {PROCESS.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}
          </ol>
          <p><Link className="more-link" to="/policy/returns-and-cancellations">See the caution fee, return and cancellation terms</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container visit">
          <div>
            <h2>Visit us in Kubwa</h2>
            <p>{SITE.address}</p>
            <p>{SITE.hours}</p>
          </div>
          <div className="btn-row">
            <a className="btn" href={`https://www.google.com/maps/dir/?api=1&destination=${dest}`} target="_blank" rel="noopener noreferrer">Get directions</a>
            <WhatsAppButton>Chat with Favion</WhatsAppButton>
            <Link className="btn btn--ghost" to="/contact">Contact details</Link>
          </div>
        </div>
      </section>
    </>
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
      <dl className="specs"><dt>Phone and WhatsApp</dt><dd><a href={`tel:${SITE.phoneLink}`}>{SITE.whatsappDisplay}</a></dd><dt>Email</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd><dt>Address</dt><dd>{SITE.address}<br /><a href={viewUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></dd><dt>Hours</dt><dd>{SITE.hours}</dd></dl>
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
  const doc = POLICY_CONTENT[slug];
  if (!POLICIES[slug] || !doc) return <NotFound />;
  return (
    <div className="container policy">
      <div className="page-head"><h1>{POLICIES[slug]}</h1>{doc.intro && <p>{doc.intro}</p>}</div>
      {doc.highlights && (
        <div className="grid grid--3 highlights">
          {doc.highlights.map(([k, v]) => <div className="card highlight" key={k}><span>{k}</span><strong>{v}</strong></div>)}
        </div>
      )}
      {doc.sections.map((sec) => (
        <section key={sec.title} className="policy__sec">
          <h2>{sec.title}</h2>
          <ul>{sec.items.map((i) => <li key={i}>{boldPrices(i)}</li>)}</ul>
        </section>
      ))}
      <p className="policy__end">Questions about these terms? <Link to="/faq">Read our FAQ</Link> or <Link to="/contact">contact us</Link>.</p>
    </div>
  );
}
export { NotFound };
