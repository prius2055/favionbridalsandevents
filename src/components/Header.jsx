import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NAV, LOGO } from '../data/site';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null); // which dropdown is expanded (touch, keyboard, mobile)
  const [q, setQ] = useState('');
  const { pathname } = useLocation();
  const go = useNavigate();
  const close = () => { setOpen(false); setSub(null); };
  const search = (e) => { e.preventDefault(); if (q.trim()) { go(`/search?q=${encodeURIComponent(q.trim())}`); setQ(''); close(); } };
  const within = (n) => [n.to, ...(n.children || []).map((c) => c.to)].some((t) => pathname === t || pathname.startsWith(`${t}/`));
  return (
    <header className="hdr">
      <a className="skip" href="#main">Skip to content</a>
      <div className="container hdr__bar">
        <Link to="/" className="hdr__logo" onClick={close}><img src={LOGO} alt="Favion Bridals and Events" width="724" height="602" /></Link>
        <button className="hdr__burger" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        <nav id="nav" className={`hdr__nav ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul>
            {NAV.map((n) => n.children ? (
              <li key={n.label} className={`hdr__has-sub ${sub === n.label ? 'is-sub-open' : ''}`} onKeyDown={(e) => e.key === 'Escape' && setSub(null)}>
                <div className="hdr__parent">
                  <Link to={n.to} className={within(n) ? 'active' : ''} onClick={close}>{n.label}</Link>
                  <button className="hdr__chev" aria-expanded={sub === n.label} aria-label={`${n.label} submenu`} onClick={() => setSub(sub === n.label ? null : n.label)}>
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
                  </button>
                </div>
                <ul className="hdr__sub">{n.children.map((c) => <li key={c.to}><NavLink to={c.to} end onClick={close}>{c.label}</NavLink></li>)}</ul>
              </li>
            ) : (
              <li key={n.to}><NavLink to={n.to} end={n.to === '/'} onClick={close}>{n.label}</NavLink></li>
            ))}
          </ul>
          <form className="hdr__search" role="search" onSubmit={search}>
            <label className="sr-only" htmlFor="site-search">Search the collection</label>
            <input id="site-search" type="search" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />
          </form>
        </nav>
      </div>
    </header>
  );
}
