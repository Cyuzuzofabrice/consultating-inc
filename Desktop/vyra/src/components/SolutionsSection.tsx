import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';

const DATA = [
  { id: 'retail', label: 'Retail & Wholesale', challenge: 'Inventory discrepancies, fragmented sales records, and limited visibility into stock movements.', solution: 'An integrated system for inventory, purchasing, sales, supplier management, and reporting.', systems: ['Inventory and stock control', 'Sales and purchasing records', 'Supplier management', 'Operational reporting'] },
  { id: 'distribution', label: 'Distribution', challenge: 'Coordinating orders, suppliers, inventory, and customer accounts across daily operations.', solution: 'Connected operational software that helps teams organize purchasing, stock, orders, and reporting.', systems: ['Order management', 'Multi-location stock visibility', 'Customer account records', 'Supplier coordination'] },
  { id: 'service', label: 'Service Businesses', challenge: 'Customer requests, follow-ups, and job information spread across messages, notes, and spreadsheets.', solution: 'A CRM and workflow system that keeps customer records, follow-ups, and activity in one place.', systems: ['Customer records', 'Follow-up management', 'Workflow and task tools', 'Activity reporting'] },
  { id: 'growing', label: 'Growing Organizations', challenge: 'Processes that worked at a small scale become slow, manual, and hard to track as the team grows.', solution: 'Custom internal platforms and automation designed around your processes and able to evolve with them.', systems: ['Internal management platforms', 'Dashboards and reporting', 'Workflow automation', 'Integrations between tools'] },
];

export default function SolutionsSection() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: KeyboardEvent) => {
    let n = active;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (active + 1) % DATA.length;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (active - 1 + DATA.length) % DATA.length;
    else return;
    e.preventDefault(); setActive(n); refs.current[n]?.focus();
  };
  const d = DATA[active];
  return (
    <section id="solutions" className="section section-tint">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Built for your operations</p>
          <h2>Different businesses. Different systems. One clear approach.</h2>
        </header>
        <div className="solutions">
          <div role="tablist" aria-label="Business type" className="tabs" onKeyDown={onKey}>
            {DATA.map((x, i) => (
              <button key={x.id} ref={(el) => (refs.current[i] = el)} role="tab" id={`tab-${x.id}`} aria-selected={i === active} aria-controls="solution-panel" tabIndex={i === active ? 0 : -1} className="tab" onClick={() => setActive(i)}>{x.label}</button>
            ))}
          </div>
          <div role="tabpanel" id="solution-panel" aria-labelledby={`tab-${d.id}`} className="panel" key={d.id}>
            <h3 className="mini">Challenges</h3><p>{d.challenge}</p>
            <h3 className="mini">Potential solution</h3><p>{d.solution}</p>
            <h3 className="mini">Systems VYRA could build</h3>
            <ul className="caps">{d.systems.map((s) => <li key={s}>{s}</li>)}</ul>
            <a href="#contact" className="link-arrow">Discuss your operations →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
