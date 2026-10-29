import { useParams, Link } from 'react-router-dom';
import ArchImage from '../components/ArchImage';
import WhatsAppButton from '../components/WhatsAppButton';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/site';
import { productMessage, formatPrice } from '../utils/whatsapp';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { ref } = useParams();
  const p = PRODUCTS.find((x) => x.ref === ref);
  if (!p) return <NotFound />;
  const related = PRODUCTS.filter((x) => x.category === p.category && x.ref !== p.ref).slice(0, 4);
  return (
    <div className="container">
      <p className="crumbs"><Link to="/">Home</Link> / <Link to={`/category/${p.category}`}>{CATEGORIES[p.category].label}</Link> / {p.name}</p>
      <div className="detail">
        <ArchImage label={p.name} ratio="3 / 4" src={p.images[0]?.src} alt={p.images[0]?.alt} />
        <div>
          <p className="eyebrow">{p.mode === 'Rent' ? 'For rent' : 'For sale'} · Ref {p.ref}</p>
          <h1>{p.name}</h1>
          <p className="price">{formatPrice(p)}</p>
          <p>{p.description}</p>
          <dl className="specs">
            <dt>Style</dt><dd>{p.style}</dd>
            <dt>Sizes</dt><dd>{p.sizes.length ? p.sizes.join(', ') : 'One size / see details'}</dd>
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
