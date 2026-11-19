import { useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/site';
import NotFound from './NotFound';
import { boldPrices } from '../utils/boldPrices';

export default function Catalogue({ title, intro, slugs }) {
  const { slug } = useParams();
  const [params] = useSearchParams();
  const [mode, setMode] = useState('All');
  let list = PRODUCTS, head = title, text = intro;
  if (slug) {
    const c = CATEGORIES[slug];
    if (!c) return <NotFound />;
    list = PRODUCTS.filter((p) => p.category === slug); head = c.label; text = c.blurb;
  } else if (slugs) {
    list = PRODUCTS.filter((p) => slugs.includes(p.category));
  } else {
    const q = (params.get('q') || '').toLowerCase();
    list = PRODUCTS.filter((p) => [p.name, p.style, p.ref, p.category, ...p.colours].join(' ').toLowerCase().includes(q));
    text = q ? `Showing results for “${params.get('q')}”.` : 'Type in the search box to find a product.';
  }
  const canBuy = (p) => p.mode === 'Sale' || !!CATEGORIES[p.category]?.buyRange;
  const shown = mode === 'All' ? list : list.filter((p) => (mode === 'Sale' ? canBuy(p) : p.mode === mode));
  const isGowns = slug === 'wedding-gowns' || (slugs && slugs.includes('wedding-gowns'));
  const cats = slugs && slugs.length > 1 ? slugs : null;
  return (
    <div className="container">
      <div className="page-head">
        <h1>{head}</h1>
        {text && <p>{boldPrices(text)}</p>}
        {cats && <p className="chips">{cats.map((s) => <Link key={s} to={`/category/${s}`} className="chip">{CATEGORIES[s].label}</Link>)}</p>}
        <div className="filter" role="group" aria-label="Filter by type">
          {['All', 'Rent', 'Sale'].map((m) => <button key={m} type="button" aria-pressed={mode === m} className={`chip ${mode === m ? 'chip--on' : ''}`} onClick={() => setMode(m)}>{m === 'Sale' ? 'Buy' : m}</button>)}
        </div>
      </div>
      {isGowns && (
        <section className="fit" aria-labelledby="fit-title">
          <h2 id="fit-title">Gowns for every bride</h2>
          <p>Our collection is curated to flatter a wide range of body types, shapes and sizes, from fitted mermaid silhouettes to full ball gowns. Our team will guide you to the style that suits you best, so you feel confident and comfortable on your wedding day.</p>
        </section>
      )}
      {shown.length ? <div className="grid grid--4 catalogue">{shown.map((p, i) => <ProductCard key={p.ref} product={p} tone={i} />)}</div> : <p className="notice">No products match yet. Message us on WhatsApp and we will help you find something.</p>}
    </div>
  );
}
