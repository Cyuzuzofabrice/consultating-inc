import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);
  return (
    <header className={`nav ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" aria-label="VYRA home" onClick={() => setOpen(false)}><Logo /></a>
        <nav aria-label="Primary" className="nav-links">
          {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <a className="btn btn-primary btn-sm nav-cta" href="#contact">Contact VYRA</a>
        <button className="nav-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <div className="container">
          {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
          <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>Contact VYRA</a>
        </div>
      </div>
    </header>
  );
}
