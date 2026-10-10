
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a
        className="navbar__logo"
        href="#home"
        aria-label="Consulting Inc. Home"
      >
        <img
          src="/lalal.jpg"
          alt="Consulting Inc."
          className="navbar__logo-image"
        />
      </a>

      <nav className="navbar__links" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="navbar__cta" href="#contact">
        Let's Talk <span>↗</span>
      </a>

      <button
        className="navbar__menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="navbar__mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Let's Talk ↗
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
