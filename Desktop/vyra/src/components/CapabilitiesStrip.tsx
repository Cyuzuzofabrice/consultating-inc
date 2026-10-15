const ITEMS = ['Business Systems', 'Custom Software', 'Data & Integrations', 'AI Automation'];
export default function CapabilitiesStrip() {
  return (
    <section className="strip" aria-label="Areas of expertise">
      <ul className="container strip-list">
        {ITEMS.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </section>
  );
}
