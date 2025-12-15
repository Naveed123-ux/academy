export function IslamicPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      {/* Islamic Geometric Pattern */}
      <defs>
        <pattern id="islamicPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path
            d="M50 0 L75 25 L50 50 L25 25 Z M50 50 L75 75 L50 100 L25 75 Z M0 50 L25 75 L0 100 L-25 75 Z M100 50 L125 75 L100 100 L75 75 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
          <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#islamicPattern)" />
    </svg>
  );
}
