const STEPS = [
  ['01', 'Understand', 'We learn how your business works, identify operational bottlenecks, and clarify the outcomes you need.'],
  ['02', 'Architect', 'We define the workflows, user experience, data model, and technical approach before development.'],
  ['03', 'Engineer', 'We build, integrate, test, and refine the solution against clear requirements.'],
  ['04', 'Evolve', 'We support improvements as your requirements change and your business grows.'],
];
export default function ApproachSection() {
  return (
    <section id="approach" className="section">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">How we work</p>
          <h2>Understand the problem. Engineer the solution.</h2>
        </header>
        <ol className="steps">
          {STEPS.map(([n, t, d]) => (
            <li key={n} className="step"><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
