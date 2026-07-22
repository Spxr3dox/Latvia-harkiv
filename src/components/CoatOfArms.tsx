// Official Latvian flag: carmine field (Pantone 201C ≈ #9e3039) with a narrow
// white horizontal band in the middle. Canonical stripe proportions 2:1:2.
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 24"
      className={className}
      aria-label="Flag of Latvia"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="40" height="24" rx="4" ry="4" fill="#9e3039" />
      <rect x="0" y="9.6" width="40" height="4.8" fill="#ffffff" />
    </svg>
  );
}

// Декоративна смуга у корпоративних синіх кольорах сайту (не прапор).
export function FlagStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`} aria-hidden>
      <div className="h-[6px] bg-[#1e4d8f]" />
      <div className="h-[3px] bg-white" />
      <div className="h-[6px] bg-[#1e4d8f]" />
    </div>
  );
}
