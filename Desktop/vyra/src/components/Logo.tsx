export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="7" fill="currentColor" className="logo-bg" />
      <path d="M8 8l8 17 8-17" fill="none" stroke="var(--logo-fg)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M16 8v9" stroke="#7657F6" strokeWidth="3" strokeLinecap="round" />
      <circle cx="16" cy="8" r="2.2" fill="#7657F6" />
    </svg>
  );
}
export default function Logo() {
  return (
    <span className="logo"><LogoMark /><span className="logo-word">VYRA</span></span>
  );
}
