import { SITE, CATEGORIES } from '../data/site';
export const waLink = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
export const generalMessage = 'Hello Favion Bridals and Events, I would like to make an enquiry.';
export const productMessage = (p) => `Hello Favion, I would like to enquire about ${p.name} (Ref ${p.ref}, ${CATEGORIES[p.category]?.buyRange ? 'to rent or buy' : p.mode === 'Rent' ? 'for rent' : 'for sale'}).\nEvent date: \nSize: `;
export const venueMessage = (v) => `Hello Favion, I would like to enquire about ${v.name}.\nEvent date: \nNumber of guests: `;
export const serviceMessage = (s) => `Hello Favion, I would like to enquire about ${s.label}.\nEvent date: \nDetails: `;
export const eventMessage = (f) => `Hello Favion, I would like to plan an event.\nName: ${f.name}\nEvent type: ${f.type}\nDate: ${f.date}\nGuests: ${f.guests || 'not sure yet'}\nNotes: ${f.notes || 'none'}`;
const naira = (v) => `₦${Number(v).toLocaleString('en-NG')}`;
const range = ([a, b]) => `${naira(a)} – ${naira(b)}`;
// Lines shown as the price. A product price overrides the category range; gowns show both rent and buy ranges.
export const priceLines = (p) => {
  const c = CATEGORIES[p.category] || {};
  if (p.price) return [`${p.mode === 'Rent' ? 'Rent' : 'Buy'}: ${naira(p.price)}`];
  const lines = [];
  if (c.rentRange) lines.push(`Rent: ${range(c.rentRange)}`);
  else if (c.rentFrom && p.mode === 'Rent') lines.push(`Rent from ${naira(c.rentFrom)}`);
  if (c.buyRange) lines.push(`Buy: ${range(c.buyRange)}`);
  return lines.length ? lines : ['Price on request'];
};
export const offerLabel = (p) => (CATEGORIES[p.category]?.buyRange ? 'Rent or buy' : p.mode === 'Rent' ? 'For rent' : 'For sale');
