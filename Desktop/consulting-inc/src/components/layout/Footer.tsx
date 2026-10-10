
const services = [
  "Web Development",
  "Digital Marketing",
  "CRM & Automation",
  "Inventory & Sales Systems",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <a href="#home" aria-label="Consulting Inc. Home">
            <img
              src="/lalal.jpg"
              alt="Consulting Inc."
              className="site-footer__logo"
            />
          </a>

          <p>
            Digital solutions for a business moving forward.
          </p>

          <a
            className="site-footer__email"
            href="mailto:consultinginc.media@gmail.com"
          >
            consultinginc.media@gmail.com ↗
          </a>

          <a
            className="site-footer__whatsapp"
            href="https://wa.me/250793568964"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with us on WhatsApp ↗
          </a>
        </div>

        <div className="site-footer__column">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="site-footer__column">
          <h3>What We Do</h3>
          {services.map((service) => (
            <a key={service} href="#services">
              {service}
            </a>
          ))}
        </div>

        <div className="site-footer__column site-footer__contact">
          <h3>Have a project?</h3>
          <p>
            Let's discuss how technology can help your business grow.
          </p>
          <a className="site-footer__cta" href="#contact">
            Start a conversation <span>↗</span>
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>
          © {new Date().getFullYear()} Consulting Inc. All rights reserved.
        </span>
        <a href="#home" className="site-footer__back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
