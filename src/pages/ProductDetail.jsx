import { useParams, Link, Navigate } from 'react-router-dom';
import ArchImage from '../components/ArchImage';
import WhatsAppButton from '../components/WhatsAppButton';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/site';
import { productMessage, priceLines, offerLabel } from '../utils/whatsapp';
import { boldPrices } from '../utils/boldPrices';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { ref } = useParams();
  const p = PRODUCTS.find((x) => x.ref === ref) || PRODUCTS.find((x) => x.aliases?.includes(ref));
  if (!p) return <NotFound />;
  if (p.ref !== ref) return <Navigate to={`/product/${p.ref}`} replace />; // old reference, e.g. WG-108
  const related = PRODUCTS.filter((x) => x.category === p.category && x.ref !== p.ref).slice(0, 4);
  return (
    <div className="container">
      <p className="crumbs"><Link to="/">Home</Link> / <Link to={`/category/${p.category}`}>{CATEGORIES[p.category].label}</Link> / {p.name}</p>
      <div className="detail">
        <ArchImage label={p.name} ratio="3 / 4" src={p.images[0]?.src} alt={p.images[0]?.alt} />
        <div>
          <p className="eyebrow">{offerLabel(p)} · Ref {p.ref}</p>
          <h1>{p.name}</h1>
          <p className="price">{priceLines(p).map((l) => <strong key={l}>{l}</strong>)}</p>
          {p.mode === 'Rent' && CATEGORIES[p.category].priceNote && <p className="notice">{boldPrices(CATEGORIES[p.category].priceNote)}</p>}
          <p>{p.description}</p>
          <dl className="specs">
            <dt>Style</dt><dd>{p.style}</dd>
            <dt>Colours</dt><dd>{p.colours.join(', ')}</dd>
          </dl>
          <div className="btn-row"><WhatsAppButton message={productMessage(p)}>Enquire on WhatsApp</WhatsAppButton><Link className="btn btn--ghost" to={`/category/${p.category}`}>Back to {CATEGORIES[p.category].label}</Link></div>
          <p className="notice">Messaging us is an enquiry, not a confirmed booking.</p>
        </div>
      </div>
      {related.length > 0 && <section className="section"><h2>You may also like</h2><div className="grid grid--4">{related.map((r, i) => <ProductCard key={r.ref} product={r} tone={i + 1} />)}</div></section>}
    </div>
  );
}
