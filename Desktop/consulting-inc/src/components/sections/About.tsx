import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Understand first",
    description:
      "We start by learning about your business, your customers, and the challenge you want to solve.",
  },
  {
    number: "02",
    title: "Keep it practical",
    description:
      "We focus on solutions that make sense for your goals, resources, and day-to-day operations.",
  },
  {
    number: "03",
    title: "Build for growth",
    description:
      "We aim to create useful, maintainable digital solutions that can grow alongside your business.",
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__intro">
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="about__square about__square--back"></div>
          <div className="about__square about__square--front">
            <span>Ideas</span>
            <span className="about__plus">+</span>
            <span>Technology</span>
            <span className="about__equals">=</span>
            <strong>Progress.</strong>
          </div>
          <div className="about__floating">BUILT AROUND YOUR BUSINESS</div>
        </motion.div>

        <div className="about__copy">
          <span className="eyebrow">A LITTLE ABOUT US</span>
          <h2 className="section-title">
            Technology should make business <span>feel simpler.</span>
          </h2>
          <p>
            Consulting Inc. helps businesses connect their digital presence
            with the way they attract customers, manage relationships, and
            run their operations.
          </p>
          <p>
            We bring web development, digital marketing, and practical
            business technology together to help solve real problems.
          </p>
          <a className="button button--primary" href="#contact">
            Tell us about your business <span>↗</span>
          </a>
        </div>
      </div>

      <div className="principles">
        {principles.map((principle, index) => (
          <motion.article
            className="principle"
            key={principle.number}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <span className="principle__number">{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
