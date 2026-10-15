import type { ReactNode } from 'react';
import { InventoryVisual, CrmVisual, SoftwareVisual, AutomationVisual } from './ServiceVisuals';

interface Service { n: string; title: string; desc: string; caps: string[]; viz: ReactNode }
const SERVICES: Service[] = [
  { n: '01', title: 'Inventory & Operations', desc: 'Gain better control over inventory, purchasing, suppliers, and day-to-day business operations with systems designed around your workflows.', caps: ['Inventory and stock movement tracking', 'Purchasing and supplier management', 'Low-stock alerts', 'Sales and operational reporting', 'Multi-location inventory where required'], viz: <InventoryVisual /> },
  { n: '02', title: 'CRM & Sales Management', desc: 'Organize customer relationships, manage opportunities, and create a clearer view of your sales process.', caps: ['Customer records', 'Lead and opportunity tracking', 'Sales pipelines', 'Follow-up management', 'Customer activity reporting'], viz: <CrmVisual /> },
  { n: '03', title: 'Custom Software Development', desc: 'We design and develop web applications and management systems tailored to your business requirements.', caps: ['Business dashboards', 'Web applications', 'Internal management platforms', 'Workflow tools', 'API and third-party integrations'], viz: <SoftwareVisual /> },
  { n: '04', title: 'AI & Business Automation', desc: 'Use AI and automation to reduce repetitive tasks, connect systems, and make business processes more efficient.', caps: ['Workflow automation', 'AI assistants', 'Data processing', 'Automated notifications and reporting', 'Integrations between business tools'], viz: <AutomationVisual /> },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">What we build</p>
          <h2>Technology designed for real business operations.</h2>
          <p className="lede">From everyday workflows to specialized applications, we build software around practical business needs.</p>
        </header>
        <div className="services">
          {SERVICES.map((s, i) => (
            <article key={s.n} className={`service ${i % 2 ? 'flip' : ''}`}>
              <div className="service-text">
                <span className="num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="caps">{s.caps.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
              <div className="service-viz">{s.viz}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
