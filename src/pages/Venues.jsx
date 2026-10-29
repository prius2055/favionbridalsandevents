import { Link } from 'react-router-dom';
import ArchImage from '../components/ArchImage';
import { VENUES } from '../data/site';
export default function Venues() {
  return (
    <div className="container">
      <div className="page-head"><h1>Wedding Venues</h1><p>Venues we can help you secure for your ceremony and reception.</p></div>
      <div className="grid grid--3 section">
        {VENUES.map((v, i) => (
          <article key={v.slug} className="tile">
            <Link to={`/venues/${v.slug}`}><ArchImage label={v.name} tone={i} ratio="4 / 4.2" /></Link>
            <h3><Link to={`/venues/${v.slug}`}>{v.name}</Link></h3>
            <p className="eyebrow">{v.area} · {v.capacity}</p>
            <p>{v.summary}</p>
            <Link className="btn btn--ghost btn--sm" to={`/venues/${v.slug}`}>View venue</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
