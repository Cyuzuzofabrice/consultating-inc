import { Suspense, lazy, useEffect, useState } from 'react';

const HeroScene = lazy(() => import('./HeroScene'));

function canUse3D() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (window.innerWidth < 900) return false;
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch { return false; }
}

export function StaticHero() {
  return (
    <svg viewBox="0 0 520 520" role="img" aria-label="Abstract illustration of connected, modular business systems" className="hero-static">
      <defs>
        <linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3a3a44" /><stop offset="1" stopColor="#17171c" /></linearGradient>
        <linearGradient id="gV" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9a82ff" /><stop offset="1" stopColor="#7657F6" /></linearGradient>
      </defs>
      <g stroke="#7657F6" strokeOpacity=".55" strokeWidth="1" fill="none">
        <path d="M260 150 L120 235 M260 150 L400 235 M120 235 L120 345 M400 235 L400 345 M120 345 L260 430 M400 345 L260 430 M260 150 L260 290 M120 235 L260 290 L400 235 M120 345 L260 290 L400 345" />
      </g>
      {[[260,150],[120,235],[400,235],[120,345],[400,345],[260,430]].map(([x,y],i)=>(
        <g key={i} transform={`translate(${x-34} ${y-22})`}>
          <path d="M0 14 L34 0 L68 14 L68 36 L34 50 L0 36Z" fill="url(#gA)" stroke="#55555f" />
          <path d="M0 14 L34 28 L68 14" fill="none" stroke="#55555f" />
          <path d="M34 28 L34 50" stroke="#55555f" />
        </g>
      ))}
      <g transform="translate(226 268)">
        <path d="M0 14 L34 0 L68 14 L68 36 L34 50 L0 36Z" fill="url(#gV)" />
        <path d="M0 14 L34 28 L68 14" fill="none" stroke="#fff" strokeOpacity=".5" />
      </g>
    </svg>
  );
}

export default function HeroSection() {
  const [use3D, setUse3D] = useState(false);
  useEffect(() => { setUse3D(canUse3D()); }, []);
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Business Software · Custom Development · AI</p>
          <h1>Make your business work smarter.</h1>
          <p className="lede">VYRA builds business management systems, custom applications, and intelligent automation designed around the way your company operates.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">Discuss Your Project</a>
            <a className="btn btn-ghost" href="#services">Explore Our Capabilities</a>
          </div>
          <p className="hero-note">Designed in Rwanda. Built for ambitious businesses.</p>
        </div>
        <div className="hero-visual">
          <StaticHero />
          {use3D && (
            <Suspense fallback={null}>
              <div className="hero-canvas" role="img" aria-label="Interactive 3D composition of connected system modules"><HeroScene /></div>
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
}
