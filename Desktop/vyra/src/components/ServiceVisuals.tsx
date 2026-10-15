export function InventoryVisual() {
  const mods = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 400 260" className="viz" role="img" aria-label="Connected inventory modules with quantity indicators and stock movement">
      <path d="M100 130H300M200 60V200" className="viz-line" />
      {mods.map((i) => {
        const [x, y] = [[60, 20], [250, 20], [60, 160], [250, 160]][i];
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <rect width="90" height="80" rx="4" className="viz-box" />
            <text x="12" y="28" className="viz-t">SKU {String(i + 1).padStart(2, '0')}</text>
            <rect x="12" y="44" width={20 + i * 14} height="6" className="viz-bar" />
            <rect x="12" y="44" width="66" height="6" className="viz-track" />
          </g>
        );
      })}
      <circle r="4" className="viz-dot d1" cx="150" cy="130" />
      <circle r="4" className="viz-dot d2" cx="200" cy="100" />
    </svg>
  );
}
export function CrmVisual() {
  const pts = [[200, 130], [80, 50], [320, 60], [70, 200], [330, 200], [200, 30]];
  return (
    <svg viewBox="0 0 400 260" className="viz" role="img" aria-label="Network connecting customers, opportunities and activity">
      {pts.slice(1).map(([x, y], i) => <line key={i} x1="200" y1="130" x2={x} y2={y} className="viz-line" />)}
      {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i === 0 ? 14 : 8} className={i === 0 ? 'viz-node-a' : 'viz-node'} />)}
      <circle r="3.5" className="viz-dot d3" cx="200" cy="130" />
    </svg>
  );
}
export function SoftwareVisual() {
  return (
    <svg viewBox="0 0 400 260" className="viz" role="img" aria-label="Architecture of modular software components connected through an interface">
      <rect x="40" y="20" width="320" height="44" rx="4" className="viz-box" /><text x="56" y="47" className="viz-t">Interface</text>
      {[40, 150, 260].map((x, i) => (
        <g key={x}><rect x={x} y="100" width="100" height="54" rx="4" className={i === 1 ? 'viz-box viz-hl' : 'viz-box'} /><text x={x + 12} y="132" className="viz-t">{['Module', 'Workflow', 'Reports'][i]}</text><path d={`M${x + 50} 64V100`} className="viz-line" /></g>
      ))}
      <rect x="40" y="190" width="320" height="44" rx="4" className="viz-box" /><text x="56" y="217" className="viz-t">Data · API · Integrations</text>
      {[90, 200, 310].map((x) => <path key={x} d={`M${x} 154V190`} className="viz-line" />)}
    </svg>
  );
}
export function AutomationVisual() {
  const st = ['Input', 'Process', 'Review', 'Notify'];
  return (
    <svg viewBox="0 0 400 260" className="viz" role="img" aria-label="Workflow with four stages and data flowing between them">
      <path d="M60 130H340" className="viz-line" />
      {st.map((s, i) => (
        <g key={s} transform={`translate(${40 + i * 104} 105)`}>
          <rect width="48" height="50" rx="4" className={i === 1 ? 'viz-box viz-hl' : 'viz-box'} />
          <text x="24" y="86" textAnchor="middle" className="viz-t">{s}</text>
        </g>
      ))}
      <circle r="4" cy="130" cx="64" className="viz-dot flow" />
    </svg>
  );
}
