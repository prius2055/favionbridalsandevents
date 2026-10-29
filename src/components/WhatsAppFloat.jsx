import { waLink, generalMessage } from '../utils/whatsapp';
import './WhatsAppFloat.css';
export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" aria-label="Chat with Favion on WhatsApp">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z"/></svg>
      <span>WhatsApp</span>
    </a>
  );
}
