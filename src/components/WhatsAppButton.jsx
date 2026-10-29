import { waLink, generalMessage } from '../utils/whatsapp';
export default function WhatsAppButton({ children, message = generalMessage, className = 'btn btn--wa' }) {
  return <a className={className} href={waLink(message)} target="_blank" rel="noopener noreferrer">{children}</a>;
}
