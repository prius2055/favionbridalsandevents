import { useParams, Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';
import { SERVICES } from '../data/site';
import { serviceMessage } from '../utils/whatsapp';
import NotFound from './NotFound';
export default function ServicePage() {
  const { service } = useParams();
  const s = SERVICES.find((x) => x.slug === service);
  if (!s) return <NotFound />;
  return (
    <div className="container">
      <p className="crumbs"><Link to="/event-planning">Event Planning</Link> / {s.label}</p>
      <div className="page-head"><h1>{s.label}</h1><p>{s.summary}</p></div>
      <ul className="ticks">{s.points.map((x) => <li key={x}>{x}</li>)}</ul>
      <div className="btn-row section"><WhatsAppButton message={serviceMessage(s)}>Enquire on WhatsApp</WhatsAppButton><Link className="btn btn--ghost" to="/event-planning">All services</Link></div>
    </div>
  );
}
