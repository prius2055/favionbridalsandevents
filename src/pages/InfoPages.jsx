import { useParams, Link } from 'react-router-dom';
import ArchImage from '../components/ArchImage';
import WhatsAppButton from '../components/WhatsAppButton';
import { SITE, PHOTOS, FAQS, POLICIES, POLICY_TEXT } from '../data/site';
import NotFound from './NotFound';

export function Gallery() {
  return (
    <div className="container">
      <div className="page-head"><h1>Gallery</h1><p>A look at our gowns, accessories and events.</p></div>
      <div className="grid grid--4 section">{PHOTOS.filter((p) => p.src).map((p, i) => <ArchImage key={i} label={p.alt} tone={i} ratio="3 / 3.8" src={p.src} alt={p.alt} />)}</div>
    </div>
  );
}
export function About() {
  return (
    <div className="container">
      <div className="page-head"><h1>About Favion</h1></div>
      <p>{SITE.name} rents gowns, bridal robes and accessories, helps couples find venues, and plans weddings and events.</p>
      <p>Tell us your date and what you have in mind on WhatsApp, and we will take it from there.</p>
      <p className="section"><WhatsAppButton>Chat with Favion on WhatsApp</WhatsAppButton></p>
    </div>
  );
}
export function Contact() {
  return (
    <div className="container">
      <div className="page-head"><h1>Contact</h1><p>The quickest way to reach us is WhatsApp.</p></div>
      <dl className="specs"><dt>WhatsApp</dt><dd>{SITE.whatsappDisplay}</dd><dt>Address</dt><dd>{SITE.address}</dd><dt>Hours</dt><dd>{SITE.hours}</dd></dl>
      <p className="section"><WhatsAppButton>Chat with Favion on WhatsApp</WhatsAppButton></p>
    </div>
  );
}
export function Faq() {
  return (
    <div className="container">
      <div className="page-head"><h1>Frequently asked questions</h1></div>
      <div className="faq">{FAQS.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
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
