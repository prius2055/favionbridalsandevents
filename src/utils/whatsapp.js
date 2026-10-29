import { SITE } from '../data/site';
export const waLink = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
export const generalMessage = 'Hello Favion Bridals and Events, I would like to make an enquiry.';
export const productMessage = (p) => `Hello Favion, I would like to enquire about ${p.name} (Ref ${p.ref}, ${p.mode === 'Rent' ? 'for rent' : 'for sale'}).\nEvent date: \nSize: `;
export const venueMessage = (v) => `Hello Favion, I would like to enquire about ${v.name}.\nEvent date: \nNumber of guests: `;
export const serviceMessage = (s) => `Hello Favion, I would like to enquire about ${s.label}.\nEvent date: \nDetails: `;
export const eventMessage = (f) => `Hello Favion, I would like to plan an event.\nName: ${f.name}\nEvent type: ${f.type}\nDate: ${f.date}\nGuests: ${f.guests || 'not sure yet'}\nNotes: ${f.notes || 'none'}`;
export const formatPrice = (p) => (p.price ? `₦${Number(p.price).toLocaleString('en-NG')}${p.mode === 'Rent' ? ' per rental' : ''}` : 'Price on request');
