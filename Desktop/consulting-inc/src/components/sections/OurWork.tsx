import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    category: "WEB & DIGITAL EXPERIENCES",
    title: "A stronger online presence.",
    description:
      "Business websites that clearly communicate your value, showcase your services, and give customers an easy way to contact you.",
    className: "work-visual--website",
    label: "YOUR BUSINESS, ONLINE",
    blocks: ["Discover", "Connect", "Grow"],
  },
  {
    number: "02",
    category: "CUSTOMER RELATIONSHIPS",
    title: "From first contact to loyal customer.",
    description:
      "Organized customer records, lead tracking, and follow-up workflows that help businesses manage relationships more consistently.",
    className: "work-visual--crm",
    label: "BETTER CUSTOMER JOURNEYS",
    blocks: ["New lead", "Follow-up", "Customer"],
  },
  {
    number: "03",
    category: "BUSINESS OPERATIONS",
    title: "Less manual work. More clarity.",
    description:
      "Digital tools that help businesses track inventory, record sales, organize orders, and understand everyday operations.",
    className: "work-visual--operations",
    label: "OPERATIONS, SIMPLIFIED",
    blocks: ["Inventory", "Sales", "Reports"],
  },
];

export default function OurWork() {
  return (
    <section className="work section" id="work">
      <div className="section-top">
        <div>
          <span className="eyebrow">POSSIBILITIES, MADE PRACTICAL</span>
          <h2 className="section-title">
            Good solutions start with <span>the right problem.</span>
          </h2>
        </div>
        <p className="section-intro">
          Explore the types of business challenges we help solve through
          design, technology, and thoughtful digital strategy.
        </p>
      </div>

      <div className="work-grid">
        {capabilities.map((item, index) => (
          <motion.article
            className="work-card"
            key={item.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`work-visual ${item.className}`}>
              <span className="work-visual__label">{item.label}</span>
              <div className="work-visual__tiles">
                {item.blocks.map((block, tileIndex) => (
                  <div className="work-tile" key={block}>
                    <span>0{tileIndex + 1}</span>
                    <strong>{block}</strong>
                    <span className="work-tile__arrow">↗</span>
                  </div>
                ))}
              </div>
              <span className="work-visual__number">{item.number}</span>
            </div>

            <div className="work-card__content">
              <span className="work-card__category">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#contact" className="text-link">
                Discuss a similar solution <span>↗</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="work-note">
        These are examples of our service capabilities, not representations
        of completed client projects.
      </p>
    </section>
  );
}
