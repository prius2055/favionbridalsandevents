import { Link } from 'react-router-dom';
import { SITE, NAV, POLICIES, LOGO_LIGHT } from '../data/site';
import './Footer.css';
export default function Footer() {
  return (
    <footer className="ftr">
      <div className="container ftr__grid">
        <div><img className="ftr__logo" src={LOGO_LIGHT} alt="Favion Bridals and Events" width="724" height="602" /><p>Bridal gown rental, accessories, venues and event planning.</p></div>
        <nav aria-label="Explore"><h3>Explore</h3><ul>{NAV.flatMap((n) => n.children || [n]).filter((n) => n.to !== '/').map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul></nav>
        <nav aria-label="Information"><h3>Information</h3><ul>
          <li><Link to="/faq">Frequently asked questions</Link></li>
          {Object.entries(POLICIES).map(([s, l]) => <li key={s}><Link to={`/policy/${s}`}>{l}</Link></li>)}</ul></nav>
        <div><h3>Contact</h3><ul><li><a href={`tel:${SITE.phoneLink}`}>{SITE.whatsappDisplay}</a></li><li>{SITE.address}</li><li>{SITE.hours}</li></ul></div>
      </div>
      <div className="container ftr__legal">
        <p>Messaging us on WhatsApp is an enquiry, not a confirmed booking. Availability and terms are confirmed by Favion before any reservation.</p>
        <p>© {new Date().getFullYear()} {SITE.name}</p>
      </div>
    </footer>
  );
}
