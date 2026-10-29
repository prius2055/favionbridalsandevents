import { useParams, Link } from 'react-router-dom';
import ArchImage from '../components/ArchImage';
import WhatsAppButton from '../components/WhatsAppButton';
import { VENUES } from '../data/site';
import { venueMessage } from '../utils/whatsapp';
import NotFound from './NotFound';
export default function VenueDetail() {
  const { slug } = useParams();
  const v = VENUES.find((x) => x.slug === slug);
  if (!v) return <NotFound />;
  return (
    <div className="container">
      <p className="crumbs"><Link to="/venues">Venues</Link> / {v.name}</p>
      <div className="page-head"><h1>{v.name}</h1><p>{v.summary}</p></div>
      <p className="eyebrow">{v.area} · {v.capacity}</p>
      <ul className="ticks">{v.features.map((f) => <li key={f}>{f}</li>)}</ul>
      <div className="grid grid--4 section">{Array.from({ length: v.gallery }, (_, i) => <ArchImage key={i} label={`${v.name} photo ${i + 1}`} tone={i} ratio="3 / 3.6" />)}</div>
      <WhatsAppButton message={venueMessage(v)}>Enquire about this venue</WhatsAppButton>
    </div>
  );
}
