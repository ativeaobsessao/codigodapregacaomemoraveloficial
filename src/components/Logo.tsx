export function Logo({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" role="img" aria-label="Código da Pregação Memorável">
      <rect width="200" height="200" fill="#0F172A" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#C9A86A" strokeWidth="2" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="#C9A86A" strokeWidth="0.75" opacity="0.6" />
      {/* open book */}
      <path d="M48 128 Q74 116 100 128 Q126 116 152 128 L152 140 Q126 128 100 140 Q74 128 48 140 Z" fill="none" stroke="#C9A86A" strokeWidth="2" strokeLinejoin="round" />
      <line x1="100" y1="128" x2="100" y2="140" stroke="#C9A86A" strokeWidth="2" />
      {/* dove */}
      <path d="M100 112 C88 104 82 92 86 80 C92 88 98 92 104 92 C108 80 120 70 134 66 C128 78 126 88 118 96 C114 104 108 110 100 112 Z" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
      <path d="M104 92 C100 84 92 74 80 70" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="122" cy="80" r="1.5" fill="#FFFFFF" />
      <text x="100" y="164" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="11" fill="#C9A86A" letterSpacing="1">CÓDIGO DA PREGAÇÃO</text>
      <text x="100" y="177" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="9" fill="#FFFFFF" letterSpacing="2">MEMORÁVEL</text>
    </svg>
  );
}
