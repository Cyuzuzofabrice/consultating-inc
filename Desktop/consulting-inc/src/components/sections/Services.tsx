import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    symbol: "↗",
    title: "Web Development",
    description:
      "Professional websites and web applications that help your business stand out, communicate clearly, and turn visitors into customers.",
    tags: ["Business websites", "Web applications"],
    color: "lavender",
  },
  {
    number: "02",
    symbol: "✳",
    title: "Digital Marketing",
    description:
      "Build your online presence with thoughtful social media management, engaging content, and targeted customer acquisition strategies.",
    tags: ["Social media", "Paid advertising"],
    color: "peach",
  },
  {
    number: "03",
    symbol: "⌘",
    title: "CRM & Automation",
    description:
      "Organize customer relationships, track potential clients, simplify follow-ups, and reduce repetitive business tasks.",
    tags: ["Lead management", "Workflows"],
    color: "mint",
  },
  {
    number: "04",
    symbol: "▦",
    title: "Inventory & Sales",
    description:
      "Make daily operations easier with practical systems for stock management, sales tracking, orders, and business reporting.",
    tags: ["Stock management", "Sales systems"],
    color: "blue",
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-top">
        <div>
          <span className="eyebrow">WHAT WE DO</span>
          <h2 className="section-title">
            Everything your business needs to <span>move forward.</span>
          </h2>
        </div>
        <p className="section-intro">
          Practical digital solutions designed around your goals, your
          customers, and the way your business works.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.article
            className={`service-card service-card--${service.color}`}
            key={service.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -5 }}
          >
            <div className="service-card__top">
              <span className="service-card__number">{service.number}</span>
              <span className="service-card__symbol">{service.symbol}</span>
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <div className="service-card__tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a href="#contact" className="service-card__link">
              Discuss your needs <span>↗</span>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
