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
