import { motion } from "framer-motion";

const planets = [
  { className: "planet-web", label: "Web", angle: 0 },
  { className: "planet-marketing", label: "Growth", angle: 120 },
  { className: "planet-systems", label: "Systems", angle: 240 },
];

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            DIGITAL SOLUTIONS FOR AMBITIOUS BUSINESSES
          </div>

          <h1>
            Good ideas deserve{" "}
            <span className="hero-highlight">
              better digital experiences.
            </span>
          </h1>

          <p className="hero-description">
            We help businesses attract customers, manage relationships,
            and run operations more efficiently through technology.
          </p>

          <div className="hero-actions">
            <a className="hero-primary-button" href="#contact">
              Let's discuss your project <span>↗</span>
            </a>

            <a className="hero-secondary-button" href="#services">
              Explore our services <span>↓</span>
            </a>
          </div>

          <div className="hero-service-list">
            <span>Websites</span>
            <i />
            <span>Marketing</span>
            <i />
            <span>Automation</span>
            <i />
            <span>Business Systems</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          aria-label="Animated network of connected planets representing our digital services"
        >
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-middle" />
          <div className="orbit orbit-inner" />

          <svg
            className="planet-connections"
            viewBox="0 0 500 500"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="connection-gradient">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#a78bfa" stopOpacity="1" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path className="connection-line" d="M250 250 L250 75" />
            <path className="connection-line" d="M250 250 L400 340" />
            <path className="connection-line" d="M250 250 L92 350" />
            <path className="connection-line connection-line-dashed" d="M92 350 Q250 470 400 340" />
            <path className="connection-line connection-line-dashed" d="M92 350 Q35 175 250 75" />
          </svg>

          <motion.div
            className="planet-core"
            whileHover={{ scale: 1.1, rotate: 8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="core-glow" />
            <div className="core-symbol">C.</div>
            <span>Connected ideas</span>
          </motion.div>

          {planets.map((planet) => (
            <motion.div
              key={planet.className}
              className={`planet-node ${planet.className}`}
              whileHover={{ scale: 1.16, zIndex: 5 }}
              transition={{ type: "spring", stiffness: 250 }}
              tabIndex={0}
              role="img"
              aria-label={`${planet.label} service`}
            >
              <div className="planet-surface" />
              <span>{planet.label}</span>
            </motion.div>
          ))}

          <motion.div
            className="floating-chip chip-top"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="chip-icon">✳</span>
            Smart solutions
          </motion.div>

          <motion.div
            className="floating-chip chip-bottom"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="chip-pulse" />
            Built to grow
          </motion.div>

          <div className="visual-caption">
            <span className="caption-line" />
            One connected digital experience
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom-line">
        <span>THOUGHTFUL DESIGN</span>
        <span>·</span>
        <span>USEFUL TECHNOLOGY</span>
        <span>·</span>
        <span>BETTER BUSINESS</span>
      </div>
    </section>
  );
}
