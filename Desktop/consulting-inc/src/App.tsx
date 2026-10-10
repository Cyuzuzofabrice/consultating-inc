import Navbar from "./components/layout/Navbar";
import Services from "./components/sections/Services";
import OurWork from "./components/sections/OurWork";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";
import "./App.css";

function Process() {
  const steps = [
    ["01", "Discover", "We learn about your business and what you need."],
    ["02", "Plan", "We agree on the right approach and priorities."],
    ["03", "Create", "We develop a practical solution around your goals."],
    ["04", "Improve", "We help you move forward as your needs evolve."],
  ];

  return (
    <section className="process section" id="process">
      <div className="process__heading">
        <span className="eyebrow">HOW WE WORK</span>
        <h2 className="section-title">
          A clear process. <span>Better collaboration.</span>
        </h2>
        <p>
          No unnecessary complexity. Just a thoughtful process that keeps
          your goals at the center.
        </p>
      </div>

      <div className="process-grid">
        {steps.map(([number, title, description]) => (
          <article className="process-card" key={number}>
            <span className="process-card__number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <OurWork />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
