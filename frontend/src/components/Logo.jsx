// src/components/Logo.jsx
export function Logo({ className = "h-10" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 320 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="kinesisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      {/* Ícone */}
      <g>
        <rect x="10" y="10" width="10" height="50" rx="5" fill="url(#kinesisGrad)" />
        <path d="M 23 30 L 45 12 C 48 9, 52 13, 49 16 L 30 36 Z" fill="url(#kinesisGrad)" />
        <path d="M 27 34 L 47 56 C 50 59, 46 63, 43 60 L 22 39 Z" fill="url(#kinesisGrad)" />
        <circle cx="51" cy="12" r="3.5" fill="#3B82F6" />
      </g>

      {/* Texto Kinesis */}
      <text x="70" y="46" fontFamily="sans-serif" fontSize="32" fontWeight="800" letterSpacing="-1" fill="#0F172A">
        Kinesis
      </text>
      
      {/* Subtítulo */}
      <text x="71" y="60" fontFamily="sans-serif" fontSize="8" fontWeight="700" letterSpacing="2" fill="#64748B">
        FISIOTERAPIA ESPORTIVA
      </text>
    </svg>
  );
}