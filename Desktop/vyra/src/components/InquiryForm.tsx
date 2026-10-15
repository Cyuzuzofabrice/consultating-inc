import { useState } from 'react';
import type { FormEvent } from 'react';
import { WHATSAPP } from '../data';

/**
 * INTEGRATION POINT
 * Set VITE_INQUIRY_ENDPOINT in .env to a form service URL (e.g. Formspree, Getform, or your own API).
 * It receives a JSON POST: { name, business, email, service, message }.
 * With no endpoint configured, the form does NOT claim to send anything: it validates and offers WhatsApp.
 */
const ENDPOINT = import.meta.env.VITE_INQUIRY_ENDPOINT as string | undefined;
const SERVICES = ['Inventory & Operations', 'CRM & Sales Management', 'Custom Software Development', 'AI & Business Automation', 'Other'];
type Status = 'idle' | 'loading' | 'success' | 'error' | 'unconfigured';
type Errors = Partial<Record<'name' | 'email' | 'service' | 'message', string>>;

export default function InquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [waLink, setWaLink] = useState(WHATSAPP);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? '').trim();
    if (v('website')) return; // honeypot: bots fill this hidden field
    const data = { name: v('name'), business: v('business'), email: v('email'), service: v('service'), message: v('message') };
    const er: Errors = {};
    if (data.name.length < 2) er.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) er.email = 'Please enter a valid email address.';
    if (!data.service) er.service = 'Please choose a service.';
    if (data.message.length < 10) er.message = 'Please describe your project (at least 10 characters).';
    setErrors(er);
    const text = `Hello VYRA, my name is ${data.name}${data.business ? ` (${data.business})` : ''}. Service: ${data.service || 'not specified'}. ${data.message}`;
    setWaLink(`${WHATSAPP}?text=${encodeURIComponent(text)}`);
    if (Object.keys(er).length) {
      (e.currentTarget.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus();
      setStatus('idle');
      return;
    }
    if (!ENDPOINT) { setStatus('unconfigured'); return; }
    setStatus('loading');
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error(String(r.status));
      setStatus('success'); e.currentTarget.reset();
    } catch { setStatus('error'); }
  }

  const fld = (id: keyof Errors) => ({ 'aria-invalid': errors[id] ? true : undefined, 'aria-describedby': errors[id] ? `${id}-err` : undefined } as const);
  const err = (id: keyof Errors) => errors[id] && <p className="field-err" id={`${id}-err`} role="alert">{errors[id]}</p>;

  return (
    <form id="inquiry" className="form" onSubmit={onSubmit} noValidate>
      <h3>Project inquiry</h3>
      <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" autoComplete="name" required {...fld('name')} />{err('name')}</div>
      <div className="field"><label htmlFor="business">Business name <span className="opt">(optional)</span></label><input id="business" name="business" autoComplete="organization" /></div>
      <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required {...fld('email')} />{err('email')}</div>
      <div className="field"><label htmlFor="service">Service required</label>
        <select id="service" name="service" defaultValue="" required {...fld('service')}><option value="" disabled>Select a service</option>{SERVICES.map((s) => <option key={s}>{s}</option>)}</select>{err('service')}</div>
      <div className="field"><label htmlFor="message">Project description</label><textarea id="message" name="message" rows={4} required {...fld('message')} />{err('message')}</div>
      <div className="hp" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button className="btn btn-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send inquiry'}</button>
      <div aria-live="polite" className="form-status">
        {status === 'success' && <p className="ok">Thank you. Your inquiry has been sent and VYRA will be in touch.</p>}
        {status === 'error' && <p className="bad">Your inquiry could not be sent. Please try again, or <a href={waLink} target="_blank" rel="noopener noreferrer">send it on WhatsApp</a>.</p>}
        {status === 'unconfigured' && <p className="note">Online submission isn't enabled yet, so nothing has been sent. <a href={waLink} target="_blank" rel="noopener noreferrer">Send this inquiry on WhatsApp</a> or call 0793568964.</p>}
      </div>
    </form>
  );
}
