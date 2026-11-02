import { TESTIMONIALS, GOOGLE_REVIEW_URL } from '../data/site';
export default function Testimonials() {
  if (!TESTIMONIALS.length) return null;
  return (
    <section className="section">
      <div className="container">
        <h2>Kind words from our brides</h2>
        <div className="grid grid--3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name + t.text} className="card quote">
              <blockquote>{t.text}</blockquote>
              <figcaption><strong>{t.name}</strong>{t.detail && <span>{t.detail}</span>}</figcaption>
            </figure>
          ))}
        </div>
        {GOOGLE_REVIEW_URL && <p className="more"><a className="btn btn--ghost" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">Leave us a Google review</a></p>}
      </div>
    </section>
  );
}
