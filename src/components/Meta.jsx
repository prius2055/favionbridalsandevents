import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE, SERVICES, VENUES, PRODUCTS, CATEGORIES, POLICIES } from '../data/site';

const ORIGIN = 'https://favionbridalsandevents.com.ng';
const BRAND = 'Favion Bridals and Events';
const DEFAULT_DESC = 'Rent bridal gowns, find matching accessories, explore wedding venues and plan your event with Favion Bridals and Events. Enquire on WhatsApp.';

const STATIC = {
  '/': ['Bridal gown rental, accessories and event planning in Abuja', DEFAULT_DESC],
  '/gowns': ['Wedding gowns to rent in Abuja', 'Rent wedding gowns for ₦50,000 – ₦150,000 or buy for ₦250,000 – ₦400,000. Gowns for every body type, shape and size. Enquire on WhatsApp.'],
  '/bridal-robes': ['Bridal robes to rent', 'Tulle, lace and corset bridal robes to rent from ₦20,000 for getting-ready photographs and bridal portraits. Enquire on WhatsApp.'],
  '/bridesmaid': ['Bridesmaid robes and bridal train outfits', 'Bridesmaid robes and coordinated bridal train outfits in matching colours. Enquire on WhatsApp.'],
  '/accessories': ['Bridal accessories: tiaras, shoes, jewellery, bouquets', 'Tiaras, bridal shoes, jewellery and bouquets to complete your wedding look. Rent or buy from Favion.'],
  '/venues': ['Wedding venues in Abuja', 'Venues we can help you secure for your wedding ceremony and reception in Abuja.'],
  '/event-planning': ['Wedding and event planning in Abuja', 'Wedding planning, decor and styling, venue sourcing and day-of coordination. Tell us your date on WhatsApp.'],
  '/gallery': ['Gallery', 'A look at Favion gowns, accessories, decor and events.'],
  '/about': ['About us', 'About Favion Bridals and Events: gown rental, accessories, venues and event planning.'],
  '/contact': ['Contact and location', `Visit us at ${SITE.address}. Open ${SITE.hours} Chat on WhatsApp: ${SITE.whatsappDisplay}.`],
  '/faq': ['Frequently asked questions', 'Answers about renting gowns, fittings, bookings and event planning at Favion.'],
};

function lookup(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  if (STATIC[path]) return STATIC[path];
  let m;
  if ((m = path.match(/^\/product\/(.+)$/))) {
    const p = PRODUCTS.find((x) => x.ref === m[1]) || PRODUCTS.find((x) => x.aliases?.includes(m[1]));
    if (p) return [`${CATEGORIES[p.category].buyRange ? 'Rent or buy' : p.mode === 'Rent' ? 'Rent' : 'Buy'} the ${p.name}`, `${p.description} ${CATEGORIES[p.category].buyRange ? 'Available to rent or buy' : p.mode === 'Rent' ? 'Available to rent' : 'Available to buy'} from Favion Bridals and Events. Enquire on WhatsApp with your date and size.`];
  }
  if ((m = path.match(/^\/category\/(.+)$/)) && CATEGORIES[m[1]]) return [CATEGORIES[m[1]].label, CATEGORIES[m[1]].blurb];
  if ((m = path.match(/^\/venues\/(.+)$/))) {
    const v = VENUES.find((x) => x.slug === m[1]);
    if (v) return [`${v.name}, wedding venue in ${v.area}`, `${v.summary} Capacity: ${v.capacity}.`];
  }
  if ((m = path.match(/^\/event-planning\/(.+)$/))) {
    const s = SERVICES.find((x) => x.slug === m[1]);
    if (s) return [s.label, `${s.summary} ${s.points.join('. ')}.`];
  }
  if ((m = path.match(/^\/policy\/(.+)$/)) && POLICIES[m[1]]) return [POLICIES[m[1]], `${POLICIES[m[1]]} at ${BRAND}.`];
  return null;
}

function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) { el = document.createElement(create.tag); Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v)); document.head.appendChild(el); }
  el.setAttribute(attr, value);
}

export default function Meta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const found = lookup(pathname);
    const title = found ? (pathname === '/' ? `${BRAND} | ${found[0]}` : `${found[0]} | ${BRAND}`) : `Page not found | ${BRAND}`;
    const desc = found ? found[1] : DEFAULT_DESC;
    const url = ORIGIN + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''));
    document.title = title;
    setTag('meta[name="description"]', { tag: 'meta', attrs: { name: 'description' } }, 'content', desc);
    setTag('meta[property="og:title"]', { tag: 'meta', attrs: { property: 'og:title' } }, 'content', title);
    setTag('meta[property="og:description"]', { tag: 'meta', attrs: { property: 'og:description' } }, 'content', desc);
    setTag('meta[property="og:url"]', { tag: 'meta', attrs: { property: 'og:url' } }, 'content', url);
    setTag('link[rel="canonical"]', { tag: 'link', attrs: { rel: 'canonical' } }, 'href', url);
    setTag('meta[name="robots"]', { tag: 'meta', attrs: { name: 'robots' } }, 'content', found ? 'index, follow' : 'noindex');
  }, [pathname]);
  return null;
}
