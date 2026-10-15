const P = [
  ['Built around real workflows', 'Solutions should reflect how teams actually work.'],
  ['Designed for clarity', 'Interfaces should make complex tasks easier to understand and complete.'],
  ['Engineered with purpose', 'Choose technologies based on the requirements, reliability, and maintainability of each project.'],
  ['Designed to evolve', 'Build with future improvements, integrations, and changing business needs in mind.'],
];
export default function WhyVyraSection() {
  return (
    <section id="about" className="section section-tint">
      <div className="container why">
        <header>
          <p className="eyebrow">About VYRA</p>
          <h2>Software should solve the problem, not create another one.</h2>
          <p className="lede">VYRA is a software company based in Rwanda, building practical, intelligent software for businesses across Africa and internationally.</p>
        </header>
        <dl className="principles">
          {P.map(([t, d]) => (<div key={t} className="principle"><dt>{t}</dt><dd>{d}</dd></div>))}
        </dl>
      </div>
    </section>
  );
}
