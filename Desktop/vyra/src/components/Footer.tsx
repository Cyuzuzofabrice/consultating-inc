import Logo from './Logo';
import { NAV, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from '../data';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><Logo /><p className="footer-tag">Software built around your business.</p></div>
        <nav aria-label="Footer"><ul>{[...NAV, { href: '#contact', label: 'Contact' }].map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul></nav>
        <ul>
          <li>Phone: <a href={PHONE_TEL}>{PHONE_DISPLAY}</a></li>
          <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul>
      </div>
      <div className="container copy">© {new Date().getFullYear()} VYRA. All rights reserved.</div>
    </footer>
  );
}
