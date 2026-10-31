# Favion Bridals and Events (React)
npm install && npm run dev
- Edit all content in `src/data/site.js` (WhatsApp number, products, venues, FAQs, policies).
- WhatsApp message templates: `src/utils/whatsapp.js`.
- Replace `ArchImage` placeholders by passing `src` and `alt`.
- All enquiries go to WhatsApp. The event form builds a WhatsApp message; nothing is stored or emailed.
- Venue galleries: set `gallery` (photo count) per venue in `site.js`; swap ArchImage for real images in `VenueDetail.jsx`.
- The spec recommends WordPress + WooCommerce for production; this is the React front-end design.
- Routing uses HashRouter (URLs look like `/#/venues`) so it works when opened as a file or on any static host. For clean URLs on a host with SPA fallback, switch to BrowserRouter in `src/main.jsx` and drop `base: './'` in `vite.config.js`.
- To view the built site: `npm run build`, then `npm run preview` (or open `dist/index.html`).
- Main menu is the `NAV` array in `src/data/site.js`. Add or reorder items there; the header and footer both read from it.
- Items marked SAMPLE in `src/data/site.js` (products, venues, services, policies) are placeholders to replace. Contact details (phone, address, hours) are set in `SITE`.
- Photos live in `public/images` (processed to 960x1280 WebP with transparent backgrounds). To add one, drop the file there and reference it in `src/data/site.js` with `img('file-name-without-extension')`.
- The logo is `public/images/favion-logo.png` (light version for the footer: `favion-logo-light.png`).
- Old links `/bridal-collection` and `/bridal-party` redirect to `/gowns` and `/bridesmaid`.
- Banners: `src/components/Banner.jsx` shows a full-width photo, optionally with text over a plum gradient. Only use images registered in `BANNERS` (`src/data/site.js`): wide and at least 1200px. Portrait or small photos live in `MEDIA` and are used in galleries, cards and venue pages instead.
- Photo helpers in `site.js`: `BANNERS` (wide, sharp), `MEDIA` (decor, stage, behind the scenes), `PHOTOS` (gallery order). Services and venues take an `images` list; services can also take a `banner`.
- Venue photos are stand-ins until you add photos of the real venues.
