import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/site';
import { waLink, eventMessage } from '../utils/whatsapp';
const TYPES = ['Wedding', 'Traditional wedding', 'Engagement', 'Birthday', 'Other'];
export default function EventPlanning() {
  const [f, setF] = useState({ name: '', type: TYPES[0], date: '', guests: '', notes: '' });
  const [err, setErr] = useState({});
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = 'Please enter your name.';
    if (!f.date.trim()) er.date = 'Please enter your event date.';
    setErr(er);
    if (!Object.keys(er).length) window.open(waLink(eventMessage(f)), '_blank', 'noopener');
  };
  return (
    <div className="container">
      <div className="page-head"><h1>Event Planning</h1><p>From a single service to full planning, we help you create an event your guests will remember.</p></div>
      <div className="grid grid--3 section">
        {SERVICES.map((s) => <article key={s.slug} className="card"><h3>{s.label}</h3><p>{s.summary}</p><Link className="btn btn--ghost btn--sm" to={`/event-planning/${s.slug}`}>Learn more</Link></article>)}
      </div>
      <section className="section">
        <h2>Tell us about your event</h2>
        <form className="form" onSubmit={submit} noValidate>
          <label className="field">Your name<input value={f.name} onChange={set('name')} aria-invalid={!!err.name} />{err.name && <span className="err">{err.name}</span>}</label>
          <label className="field">Event type<select value={f.type} onChange={set('type')}>{TYPES.map((t) => <option key={t}>{t}</option>)}</select></label>
          <label className="field">Event date<input value={f.date} onChange={set('date')} placeholder="e.g. 14 June 2027" aria-invalid={!!err.date} />{err.date && <span className="err">{err.date}</span>}</label>
          <label className="field">Number of guests<input inputMode="numeric" value={f.guests} onChange={set('guests')} /></label>
          <label className="field form__wide">Notes<textarea rows="4" value={f.notes} onChange={set('notes')} /></label>
          <div className="form__wide"><button className="btn btn--wa" type="submit">Send on WhatsApp</button></div>
        </form>
      </section>
    </div>
  );
}
