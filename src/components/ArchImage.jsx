import './ArchImage.css';
// Arch-shaped image. Pass src and alt for a real photo; without src a styled placeholder is shown.
export default function ArchImage({ label, ratio = '3 / 4', tone = 0, src, alt }) {
  return (
    <div className={`arch arch--t${Math.abs(tone) % 4}`} style={{ aspectRatio: ratio }} {...(src ? {} : { role: 'img', 'aria-label': label })}>
      {src ? <img src={src} alt={alt || label} loading="lazy" /> : <span className="arch__label">{label}</span>}
    </div>
  );
}
