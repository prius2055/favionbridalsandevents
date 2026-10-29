import { useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/site';
import NotFound from './NotFound';

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
  const shown = mode === 'All' ? list : list.filter((p) => p.mode === mode);
  const cats = slugs && slugs.length > 1 ? slugs : null;
  return (
    <div className="container">
      <div className="page-head">
        <h1>{head}</h1>
        {text && <p>{text}</p>}
        {cats && <p className="chips">{cats.map((s) => <Link key={s} to={`/category/${s}`} className="chip">{CATEGORIES[s].label}</Link>)}</p>}
        <div className="filter" role="group" aria-label="Filter by type">
          {['All', 'Rent', 'Sale'].map((m) => <button key={m} type="button" aria-pressed={mode === m} className={`chip ${mode === m ? 'chip--on' : ''}`} onClick={() => setMode(m)}>{m === 'Sale' ? 'Buy' : m}</button>)}
        </div>
      </div>
      {shown.length ? <div className="grid grid--4 catalogue">{shown.map((p, i) => <ProductCard key={p.ref} product={p} tone={i} />)}</div> : <p className="notice">No products match yet. Message us on WhatsApp and we will help you find something.</p>}
    </div>
  );
}
