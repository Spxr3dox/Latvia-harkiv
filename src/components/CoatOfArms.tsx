// Minimalist emblem inspired by Latvian state visual identity: a shield
// with the red bar of the state flag. Not the state coat-of-arms itself —
// used only as a decorative mark for the site.
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 2 H36 V26 C36 32.5 30 37 20 38 C10 37 4 32.5 4 26 Z" fill="#fff" stroke="#1a1a1a" strokeWidth="1.4" />
      <rect x="4" y="17" width="32" height="6" fill="#1e4d8f" />
      <path d="M4 17 H36" stroke="#1a1a1a" strokeWidth="0.6" opacity="0.4" />
      <path d="M4 23 H36" stroke="#1a1a1a" strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}

export function FlagStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`} aria-hidden>
      <div className="h-[6px] bg-brand-600" />
      <div className="h-[3px] bg-white" />
      <div className="h-[6px] bg-brand-600" />
      {/* colour changed to diplomatic blue per client preference */}
    </div>
  );
}
