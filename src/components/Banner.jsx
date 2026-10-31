import './Banner.css';
// Full-width photo banner. Only pass images from BANNERS in data/site.js (wide and at least 1200px).
// Children (optional) are laid over the bottom of the photo on a plum gradient.
export default function Banner({ image, ratio = '21 / 9', mobileRatio = '4 / 3', full = false, children }) {
  return (
    <figure className={`banner${full ? ' banner--full' : ''}`} style={{ '--r': ratio, '--rm': mobileRatio, '--pos': image.position || '50% 30%' }}>
      <img src={image.src} alt={image.alt} loading="lazy" />
      {children && <figcaption className="banner__over">{children}</figcaption>}
    </figure>
  );
}
