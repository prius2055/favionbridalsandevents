import { TESTIMONIALS, GOOGLE_REVIEW_URL } from '../data/site';
// Real Favion brides. `text` is her own words (quote); `summary` is an approved statement in our words.
export default function Testimonials({ tone = '' }) {
  if (!TESTIMONIALS.length) return null;
  return (
    <section className={`section ${tone}`}>
      <div className="container">
        <h2>Kind words from our clients</h2>
        <p className="lead-sm">Brides and couples we have had the joy of serving, in their own words.</p>
        <div className="grid grid--4 brides">
          {TESTIMONIALS.map((t) => (
            <figure key={t.image} className="bride">
              <img src={t.image} alt={t.alt} width={t.w} height={t.h} loading="lazy" style={{ objectPosition: t.pos }} />
              <figcaption>
                {t.text && <blockquote>“{t.text}”</blockquote>}
                {t.summary && <p className="bride__note">{t.summary}</p>}
                <strong>{t.name || 'A Favion bride'}</strong>
                {t.detail && <span>{t.detail}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
        {GOOGLE_REVIEW_URL && <p className="more"><a className="btn btn--ghost" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">Leave us a Google review</a></p>}
      </div>
    </section>
  );
}
