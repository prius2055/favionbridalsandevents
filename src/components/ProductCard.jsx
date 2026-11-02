import { Link } from 'react-router-dom';
import ArchImage from './ArchImage';
import WhatsAppButton from './WhatsAppButton';
import { productMessage, priceLines, offerLabel } from '../utils/whatsapp';
import './ProductCard.css';
export default function ProductCard({ product: p, tone = 0 }) {
  return (
    <article className="pc">
      <Link to={`/product/${p.ref}`} className="pc__media" aria-label={`View ${p.name}`}><ArchImage label={p.name} tone={tone} src={p.images?.[0]?.src} alt={p.images?.[0]?.alt} /></Link>
      <div className="pc__body">
        <p className="pc__meta"><span className={`pc__tag pc__tag--${p.mode.toLowerCase()}`}>{offerLabel(p)}</span> {p.style} · Ref {p.ref}</p>
        <h3><Link to={`/product/${p.ref}`}>{p.name}</Link></h3>
        <p className="pc__detail">Colours: {p.colours.join(', ')}</p>
        <p className="pc__price">{priceLines(p).map((l) => <strong key={l}>{l}</strong>)}</p>
        <div className="btn-row">
          <Link className="btn btn--ghost btn--sm" to={`/product/${p.ref}`}>View details</Link>
          <WhatsAppButton className="btn btn--wa btn--sm" message={productMessage(p)}>Enquire on WhatsApp</WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
