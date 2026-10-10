import { motion } from "framer-motion";

const email = "consultinginc.media@gmail.com";
const whatsapp = "250793568964";

const message = encodeURIComponent(
  "Hello Consulting Inc., I would like to discuss a project with your team."
);

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow contact-eyebrow">
            HAVE SOMETHING IN MIND?
          </span>

          <h2>Let's make your next idea work harder.</h2>

          <p>
            Tell us what you're working on, what needs improving, or where
            your business wants to go next.
          </p>

          <div className="contact-actions">
            <a
              className="contact-button"
              href={`https://wa.me/${whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>

          <a className="contact-email" href={`mailto:${email}?subject=${encodeURIComponent("Project Inquiry")}`}>
            {email}
          </a>
        </motion.div>

        <div className="contact-decoration" aria-hidden="true">
          <div className="contact-square contact-square-one" />
          <div className="contact-square contact-square-two" />
          <div className="contact-square contact-square-three" />
        </div>
      </div>
    </section>
  );
}
