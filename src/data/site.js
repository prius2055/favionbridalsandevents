const img = (name) => `${import.meta.env.BASE_URL}images/${name}.webp`;
export const LOGO = `${import.meta.env.BASE_URL}images/favion-logo.png`;
export const LOGO_LIGHT = `${import.meta.env.BASE_URL}images/favion-logo-light.png`;

// All editable site content lives here. Replace the placeholders marked SAMPLE with real details.
export const SITE = {
  name: 'Favion Bridals and Events',
  whatsapp: '2349034365585', // international format, digits only; every WhatsApp enquiry goes to this number
  whatsappDisplay: '+234 903 436 5585',
  phoneLink: '+2349034365585',
  address: 'Block A, Shop 106, Maitama Modern Market, Kubwa, Abuja',
  hours: 'Daily, 9am to 5:30pm. Sundays by appointment only.',
};

export const CATEGORIES = {
  'wedding-gowns': { label: 'Wedding Gowns', blurb: 'Bridal gowns to rent in every silhouette.' },
  'bridesmaid-robes': { label: 'Bridesmaid Robes', blurb: 'Matching robes for getting-ready photographs.' },
  'bridal-train-outfits': { label: 'Bridal Train Outfits', blurb: 'Coordinated outfits for your bridal train.' },
  'tiaras-crowns': { label: 'Tiaras and Crowns', blurb: 'Finishing touches for the veil and hair.' },
  'bridal-shoes': { label: 'Bridal Shoes', blurb: 'Comfortable, beautiful shoes for the day.' },
  jewellery: { label: 'Jewellery', blurb: 'Earrings, necklaces and sets to match your gown.' },
  bouquets: { label: 'Bouquets', blurb: 'Bridal and bridesmaid bouquets.' },
  'bridal-robes': { label: 'Bridal Robes', blurb: 'Tulle robes for getting-ready photographs and bridal portraits.' },
};

export const GROUPS = {
  gowns: ['wedding-gowns'],
  robes: ['bridal-robes'],
  party: ['bridesmaid-robes', 'bridal-train-outfits'],
  accessories: ['tiaras-crowns', 'bridal-shoes', 'jewellery', 'bouquets'],
};

export const SERVICES = [
  { slug: 'wedding-planning', label: 'Wedding Planning', summary: 'Full planning from the first idea to the last dance.', points: ['Budget and timeline planning', 'Vendor selection and booking', 'Guest list and invitation guidance', 'Rehearsal and run-of-show'] },
  { slug: 'decor-styling', label: 'Decor and Styling', summary: 'A cohesive look for your ceremony and reception.', points: ['Colour palette and theme design', 'Stage, table and aisle styling', 'Floral and lighting direction', 'Set-up and take-down'] },
  { slug: 'venue-sourcing', label: 'Venue Sourcing', summary: 'Help finding and securing the right venue.', points: ['Shortlist matched to your guest count and budget', 'Venue visits and comparisons', 'Support with venue terms'] },
  { slug: 'day-coordination', label: 'Day-of Coordination', summary: 'A calm, organised wedding day for you and your family.', points: ['Vendor and timeline management', 'Guest flow and seating support', 'Single point of contact on the day'] },
];

// Main menu. Event Planning keeps its own dropdown of services.
export const NAV = [
  { label: 'Gowns', to: '/gowns' },
  { label: 'Bridal Robes', to: '/bridal-robes' },
  { label: 'Bridesmaid', to: '/bridesmaid', children: GROUPS.party.map((s) => ({ label: CATEGORIES[s].label, to: `/category/${s}` })) },
  { label: 'Accessories', to: '/accessories', children: GROUPS.accessories.map((s) => ({ label: CATEGORIES[s].label, to: `/category/${s}` })) },
  { label: 'Venues', to: '/venues' },
  { label: 'Event Planning', to: '/event-planning', children: SERVICES.map((s) => ({ label: s.label, to: `/event-planning/${s.slug}` })) },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const POLICIES = {
  'rental-terms': 'Rental terms',
  'returns-and-cancellations': 'Returns and cancellations',
  privacy: 'Privacy',
};

export const POLICY_TEXT = {
  'rental-terms': ['Rental periods, deposits, fitting appointments and fees are confirmed by Favion when you enquire.', 'Gowns and accessories are reserved only after Favion confirms availability and agrees the terms with you.'],
  'returns-and-cancellations': ['Return dates, condition requirements and cancellation terms are agreed in writing at the time of reservation.', 'Please contact us on WhatsApp as early as possible if your plans change.'],
  privacy: ['Enquiries are sent to Favion through WhatsApp. This website does not store or email the details you enter in its forms.', 'Your information is used only to respond to your enquiry.'],
};

export const FAQS = [
  { q: 'How do I rent a gown?', a: 'Choose a style, then tap Enquire on WhatsApp with your event date and size. Favion confirms availability and the next steps.' },
  { q: 'Is a WhatsApp message a booking?', a: 'No. It is an enquiry. A reservation is made only after Favion confirms availability and terms.' },
  { q: 'Can I try gowns on first?', a: 'Ask about fitting appointments when you enquire.' },
  { q: 'Do you plan events outside weddings?', a: 'Yes. Use the Event Planning page to tell us about your event.' },
];

// Photos live in public/images. Entries with src: null show a styled placeholder until you add a photo.
export const PHOTOS = [
  { src: img('gown-crystal-long-sleeve'), alt: 'Bride in a crystal beaded gown with a long veil' },
  { src: img('gown-crowned-champagne'), alt: 'Bride wearing a crown and holding a bouquet' },
  { src: null, alt: 'Bridesmaids in matching robes' },
  { src: img('gown-red-mermaid'), alt: 'Red mermaid gown with a ruffled sleeve' },
  { src: null, alt: 'Wedding reception decor' },
  { src: img('bouquet-ivory-rose'), alt: 'Ivory rose bridal bouquet' },
  { src: img('rings-gold-bands'), alt: 'Pair of gold wedding bands' },
  { src: img('robe-ruffle-sleeve'), alt: 'White tulle bridal robe with ruffled sleeves' },
  { src: img('gown-off-shoulder-veil'), alt: 'Bride in an off-shoulder gown with a veil' },
  { src: img('gown-sparkle-high-neck'), alt: 'Bride in a sparkling high-neck gown' },
  { src: img('gown-fringe-off-shoulder'), alt: 'Bride in an off-shoulder gown with beaded fringe' },
  { src: img('gown-beaded-high-neck'), alt: 'Bride in a beaded high-neck ball gown' },
  { src: img('gown-lace-train'), alt: 'Floral lace gown with a long train' },
  { src: img('robe-cloud-tulle'), alt: 'Bride in a white tulle robe holding a bouquet' },
  { src: img('robe-feather-caramel'), alt: 'Caramel tulle robe with feather trim' },
  { src: img('gown-lace-sleeve-clutch'), alt: 'Bride in a lace-sleeve gown holding a pearl clutch' },
  { src: img('dress-short-pearl-corset'), alt: 'Short tulle dress with a pearl corset bodice' },
  { src: img('gown-tulle-corset'), alt: 'Beaded corset gown with a tulle overskirt' },
  { src: img('hero-bride-lobby'), alt: 'Bride in a long-sleeve gown with a detachable overskirt' },
  { src: img('hero-bride-offshoulder'), alt: 'Bride in an embroidered off-shoulder ball gown holding a bouquet' },
  { src: img('hero-mermaid-veil'), alt: 'Bride in a beaded mermaid gown with a long veil' },
  { src: img('hero-gown-display'), alt: 'Ball gown with a beaded bodice on display' },
  { src: img('hero-bride-gypsophila'), alt: 'Bride in a lace gown holding a gypsophila bouquet' },
  { src: img('hero-bride-bouquet'), alt: 'Bride in a beaded gown holding a cascade bouquet' },
];

// Homepage hero: each arch cycles through two photos.
export const HERO_SLOTS = [
  { ratio: '3 / 4.4', photos: [{ src: img('hero-bride-lobby'), alt: 'Bride in a long-sleeve gown with a detachable overskirt' }, { src: img('hero-bride-offshoulder'), alt: 'Bride in an embroidered off-shoulder ball gown holding a bouquet' }] },
  { ratio: '3 / 4', photos: [{ src: img('hero-mermaid-veil'), alt: 'Bride in a beaded mermaid gown with a long veil' }, { src: img('hero-gown-display'), alt: 'Ball gown with a beaded bodice on display' }] },
  { ratio: '3 / 3.4', photos: [{ src: img('hero-bride-gypsophila'), alt: 'Bride in a lace gown holding a gypsophila bouquet' }, { src: img('hero-bride-bouquet'), alt: 'Bride in a beaded gown holding a cascade bouquet' }] },
];

const SZ = ['UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16'];
const RSZ = ['S', 'M', 'L', 'XL'];
const pic = (name, alt) => [{ src: img(name), alt }];
// Products. Sizes and names are SAMPLE text: edit to match your stock. Set price (number, in naira) when ready;
// with no price the site shows "Price on request".
export const PRODUCTS = [
  { ref: 'WG-101', name: 'Beaded High-Neck Ball Gown', category: 'wedding-gowns', mode: 'Rent', style: 'Ball gown', sizes: SZ, colours: ['Ivory', 'White'], price: null, images: pic('gown-beaded-high-neck', 'Beaded high-neck ball gown'), description: 'A fully beaded high-neck gown with long sleeves and a full, structured skirt.' },
  { ref: 'WG-102', name: 'Fringe Off-Shoulder Ball Gown', category: 'wedding-gowns', mode: 'Rent', style: 'Ball gown', sizes: SZ, colours: ['White'], price: null, images: pic('gown-fringe-off-shoulder', 'Off-shoulder ball gown with beaded fringe'), description: 'An off-shoulder bodice with beaded fringe sleeves and a full tulle skirt.' },
  { ref: 'WG-103', name: 'Layered Off-Shoulder Gown', category: 'wedding-gowns', mode: 'Rent', style: 'Ball gown', sizes: SZ, colours: ['Ivory'], price: null, images: pic('gown-off-shoulder-veil', 'Layered off-shoulder gown with a veil'), description: 'A regal off-shoulder gown with layered satin detail and a full skirt.' },
  { ref: 'WG-104', name: 'Crowned Champagne Ball Gown', category: 'wedding-gowns', mode: 'Rent', style: 'Ball gown', sizes: SZ, colours: ['Champagne'], price: null, images: pic('gown-crowned-champagne', 'Champagne beaded ball gown'), description: 'A beaded champagne gown with ruched off-shoulder sleeves and a sweeping skirt.' },
  { ref: 'WG-105', name: 'Crystal Long-Sleeve Gown', category: 'wedding-gowns', mode: 'Rent', style: 'Cathedral gown', sizes: SZ, colours: ['Silver white'], price: null, images: pic('gown-crystal-long-sleeve', 'Crystal long-sleeve gown'), description: 'A crystal-embellished gown with sheer long sleeves and an illusion neckline.' },
  { ref: 'WG-106', name: 'Sparkle High-Neck Ball Gown', category: 'wedding-gowns', mode: 'Rent', style: 'Ball gown', sizes: SZ, colours: ['White'], price: null, images: pic('gown-sparkle-high-neck', 'Sparkling high-neck ball gown'), description: 'A sparkling high-neck gown with sheer sleeves and a full glitter-tulle skirt.' },
  { ref: 'WG-107', name: 'Lace Sleeve Ball Gown', category: 'wedding-gowns', mode: 'Rent', style: 'Ball gown', sizes: SZ, colours: ['White'], price: null, images: pic('gown-lace-sleeve-clutch', 'Lace-sleeve ball gown'), description: 'A beaded lace-sleeve gown with a scoop neckline and a soft tulle skirt.' },
  { ref: 'WG-108', name: 'Floral Lace Train Gown', category: 'wedding-gowns', mode: 'Rent', style: 'Train gown', sizes: SZ, colours: ['White'], price: null, images: pic('gown-lace-train', 'Floral lace gown with a long train'), description: 'A floral lace gown with sheer sleeves, a high slit and a dramatic train.' },
  { ref: 'WG-109', name: 'Red Mermaid Gown', category: 'wedding-gowns', mode: 'Rent', style: 'Mermaid', sizes: SZ, colours: ['Red'], price: null, images: pic('gown-red-mermaid', 'Red mermaid gown'), description: 'A fitted red mermaid gown with a ruffled sleeve and a tiered train.' },
  { ref: 'WG-110', name: 'Short Pearl Corset Dress', category: 'wedding-gowns', mode: 'Rent', style: 'Short dress', sizes: SZ.slice(0, 4), colours: ['White'], price: null, images: pic('dress-short-pearl-corset', 'Short tulle dress with a pearl corset'), description: 'A short tulle dress with a pearl-beaded corset and criss-cross neckline, for receptions and photo shoots.' },
  { ref: 'WG-111', name: 'Tulle Corset Gown', category: 'wedding-gowns', mode: 'Rent', style: 'Corset gown', sizes: SZ.slice(0, 4), colours: ['White'], price: null, images: pic('gown-tulle-corset', 'Beaded corset gown with a tulle overskirt'), description: 'A beaded corset bodice with a sheer tulle overskirt and a long train.' },
  { ref: 'BR-501', name: 'Feather-Trim Tulle Robe', category: 'bridal-robes', mode: 'Rent', style: 'Tulle robe', sizes: [], colours: ['Caramel'], price: null, images: pic('robe-feather-caramel', 'Caramel tulle robe with feather trim'), description: 'A sheer tulle robe with soft feather trim on the sleeves and hem.' },
  { ref: 'BR-502', name: 'Ruffle Sleeve Tulle Robe', category: 'bridal-robes', mode: 'Rent', style: 'Tulle robe', sizes: [], colours: ['White'], price: null, images: pic('robe-ruffle-sleeve', 'White tulle robe with ruffled sleeves'), description: 'A flowing white robe with dramatic ruffled sleeves and a high slit.' },
  { ref: 'BR-503', name: 'Cloud Tulle Train Robe', category: 'bridal-robes', mode: 'Rent', style: 'Tulle robe', sizes: [], colours: ['White'], price: null, images: pic('robe-cloud-tulle', 'White tulle robe with a ruffled train'), description: 'A white tulle robe with puffed sleeves and a ruffle-edged train.' },
  { ref: 'BM-201', name: 'Blush Satin Bridesmaid Robe', category: 'bridesmaid-robes', mode: 'Sale', style: 'Satin robe', sizes: RSZ, colours: ['Blush', 'Champagne', 'Sage'], price: null, images: [], description: 'A soft satin robe, ideal for getting-ready photographs.' },
  { ref: 'BM-202', name: 'Lace Trim Bridesmaid Robe', category: 'bridesmaid-robes', mode: 'Sale', style: 'Lace robe', sizes: RSZ, colours: ['White', 'Dusty rose'], price: null, images: [], description: 'A satin robe finished with delicate lace trim.' },
  { ref: 'BT-301', name: 'Sage Bridal Train Set', category: 'bridal-train-outfits', mode: 'Rent', style: 'Coordinated set', sizes: RSZ, colours: ['Sage'], price: null, images: [], description: 'Matching outfits for your bridal train, in one colour story.' },
  { ref: 'BT-302', name: 'Dusty Rose Bridal Train Set', category: 'bridal-train-outfits', mode: 'Rent', style: 'Coordinated set', sizes: RSZ, colours: ['Dusty rose'], price: null, images: [], description: 'Soft dusty rose outfits that photograph beautifully.' },
  { ref: 'AC-401', name: 'Pearl Crown Tiara', category: 'tiaras-crowns', mode: 'Rent', style: 'Pearl', sizes: [], colours: ['Silver', 'Gold'], price: null, images: [], description: 'A pearl-studded crown that sits neatly above a veil.' },
  { ref: 'AC-402', name: 'Crystal Halo Tiara', category: 'tiaras-crowns', mode: 'Rent', style: 'Crystal', sizes: [], colours: ['Silver'], price: null, images: [], description: 'A crystal halo with a fine, light profile.' },
  { ref: 'AC-411', name: 'Satin Bridal Heels', category: 'bridal-shoes', mode: 'Sale', style: 'Satin heel', sizes: ['EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], colours: ['Ivory', 'Nude'], price: null, images: [], description: 'A satin heel with a comfortable, stable height.' },
  { ref: 'AC-412', name: 'Pearl Block Heels', category: 'bridal-shoes', mode: 'Sale', style: 'Block heel', sizes: ['EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], colours: ['Ivory'], price: null, images: [], description: 'A block heel with pearl detail, easy to wear all day.' },
  { ref: 'AC-421', name: 'Pearl Drop Earring Set', category: 'jewellery', mode: 'Rent', style: 'Pearl', sizes: [], colours: ['Pearl', 'Gold'], price: null, images: [], description: 'Drop earrings with a matching bracelet.' },
  { ref: 'AC-422', name: 'Gold Bridal Necklace Set', category: 'jewellery', mode: 'Rent', style: 'Statement set', sizes: [], colours: ['Gold'], price: null, images: [], description: 'A statement necklace with matching earrings.' },
  { ref: 'AC-423', name: 'Gold Wedding Bands', category: 'jewellery', mode: 'Sale', style: 'Wedding bands', sizes: [], colours: ['Gold'], price: null, images: pic('rings-gold-bands', 'Pair of gold wedding bands'), description: 'A matching pair of polished gold wedding bands.' },
  { ref: 'AC-431', name: 'Ivory Rose and Succulent Bouquet', category: 'bouquets', mode: 'Sale', style: 'Hand-tied', sizes: [], colours: ['Ivory', 'Green'], price: null, images: pic('bouquet-ivory-rose', 'Ivory rose bridal bouquet with succulents and greenery'), description: 'A hand-tied bouquet of ivory roses, succulents and trailing greenery.' },
  { ref: 'AC-432', name: 'Blush Peony Bouquet', category: 'bouquets', mode: 'Sale', style: 'Cascade', sizes: [], colours: ['Blush'], price: null, images: [], description: 'A cascading bouquet with blush peonies.' },
];

// SAMPLE venues
export const VENUES = [
  { slug: 'garden-pavilion', name: 'The Garden Pavilion', area: 'Abuja', capacity: '150 to 300 guests', summary: 'An open garden with a covered pavilion for ceremony and reception.', features: ['Garden ceremony space', 'Covered pavilion', 'Parking'], gallery: 4 },
  { slug: 'grand-ballroom', name: 'The Grand Ballroom', area: 'Abuja', capacity: '300 to 600 guests', summary: 'A large indoor hall suited to a formal reception.', features: ['Air-conditioned hall', 'Stage and lighting', 'Bridal suite'], gallery: 4 },
  { slug: 'courtyard-terrace', name: 'The Courtyard Terrace', area: 'Abuja', capacity: '60 to 150 guests', summary: 'An intimate terrace for smaller celebrations.', features: ['Terrace setting', 'Flexible layout', 'Evening lighting'], gallery: 3 },
];
