// SVG 일러스트레이션 컴포넌트 - 저작권 걱정 없는 직접 그린 이미지들

interface IllustrationProps {
  className?: string;
}

// Hero 배경: 도시 스카이라인 + 그리드
export function HeroIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid pattern */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="600" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 60} x2="1200" y2={i * 60} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}
      {/* Buildings */}
      <rect x="100" y="250" width="80" height="350" rx="4" fill="rgba(255,255,255,0.08)" />
      <rect x="110" y="280" width="15" height="20" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="135" y="280" width="15" height="20" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="155" y="280" width="15" height="20" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="110" y="320" width="15" height="20" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="135" y="320" width="15" height="20" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="155" y="320" width="15" height="20" rx="2" fill="rgba(255,255,255,0.06)" />

      <rect x="200" y="180" width="100" height="420" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="210" y="200" width="18" height="22" rx="2" fill="rgba(255,255,255,0.05)" />
      <rect x="240" y="200" width="18" height="22" rx="2" fill="rgba(255,255,255,0.05)" />
      <rect x="270" y="200" width="18" height="22" rx="2" fill="rgba(255,255,255,0.05)" />

      <rect x="320" y="300" width="70" height="300" rx="4" fill="rgba(255,255,255,0.07)" />
      <rect x="410" y="150" width="90" height="450" rx="4" fill="rgba(255,255,255,0.05)" />
      <rect x="520" y="220" width="60" height="380" rx="4" fill="rgba(255,255,255,0.08)" />

      <rect x="620" y="280" width="80" height="320" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="720" y="120" width="110" height="480" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="850" y="200" width="75" height="400" rx="4" fill="rgba(255,255,255,0.07)" />
      <rect x="945" y="260" width="90" height="340" rx="4" fill="rgba(255,255,255,0.05)" />
      <rect x="1055" y="320" width="65" height="280" rx="4" fill="rgba(255,255,255,0.06)" />

      {/* Globe arc */}
      <circle cx="600" cy="500" r="300" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" />
      <circle cx="600" cy="500" r="250" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
      <ellipse cx="600" cy="500" rx="180" ry="300" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
    </svg>
  );
}

// About 섹션: 비즈니스 미팅 일러스트
export function AboutIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Desk */}
      <rect x="40" y="150" width="320" height="8" rx="4" fill="#748C5E" opacity="0.15" />
      <rect x="60" y="158" width="8" height="60" rx="2" fill="#748C5E" opacity="0.1" />
      <rect x="332" y="158" width="8" height="60" rx="2" fill="#748C5E" opacity="0.1" />
      {/* Laptop */}
      <rect x="120" y="110" width="80" height="50" rx="4" fill="#748C5E" opacity="0.2" />
      <rect x="125" y="115" width="70" height="38" rx="2" fill="#748C5E" opacity="0.1" />
      <rect x="105" y="148" width="110" height="6" rx="2" fill="#748C5E" opacity="0.15" />
      {/* Documents */}
      <rect x="230" y="120" width="50" height="35" rx="3" fill="#748C5E" opacity="0.12" />
      <line x1="238" y1="130" x2="272" y2="130" stroke="#748C5E" strokeWidth="2" opacity="0.15" />
      <line x1="238" y1="138" x2="265" y2="138" stroke="#748C5E" strokeWidth="2" opacity="0.15" />
      <line x1="238" y1="146" x2="260" y2="146" stroke="#748C5E" strokeWidth="2" opacity="0.12" />
      {/* Person 1 */}
      <circle cx="100" cy="70" r="18" fill="#748C5E" opacity="0.2" />
      <rect x="82" y="92" width="36" height="50" rx="8" fill="#748C5E" opacity="0.15" />
      {/* Person 2 */}
      <circle cx="300" cy="65" r="18" fill="#748C5E" opacity="0.25" />
      <rect x="282" y="87" width="36" height="50" rx="8" fill="#748C5E" opacity="0.18" />
      {/* Checkmark badge */}
      <circle cx="340" y="40" r="22" fill="#748C5E" opacity="0.12" />
      <path d="M330 40L337 47L352 33" stroke="#748C5E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
    </svg>
  );
}

// 서비스 카드용 일러스트
export function ConsultingIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#748C5E" opacity="0.06" />
      {/* Clipboard */}
      <rect x="155" y="30" width="90" height="120" rx="8" fill="#748C5E" opacity="0.15" />
      <rect x="175" y="20" width="50" height="16" rx="8" fill="#748C5E" opacity="0.2" />
      <line x1="170" y1="60" x2="230" y2="60" stroke="#748C5E" strokeWidth="3" opacity="0.15" />
      <line x1="170" y1="75" x2="220" y2="75" stroke="#748C5E" strokeWidth="3" opacity="0.12" />
      <line x1="170" y1="90" x2="225" y2="90" stroke="#748C5E" strokeWidth="3" opacity="0.12" />
      <path d="M170 108L178 116L192 102" stroke="#748C5E" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      <line x1="200" y1="110" x2="230" y2="110" stroke="#748C5E" strokeWidth="3" opacity="0.12" />
      {/* Gear */}
      <circle cx="310" cy="60" r="25" stroke="#748C5E" strokeWidth="3" fill="none" opacity="0.12" />
      <circle cx="310" cy="60" r="10" stroke="#748C5E" strokeWidth="2" fill="none" opacity="0.12" />
    </svg>
  );
}

export function AuditIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#748C5E" opacity="0.06" />
      {/* Magnifying glass */}
      <circle cx="180" cy="85" r="40" stroke="#748C5E" strokeWidth="4" fill="none" opacity="0.15" />
      <line x1="210" y1="115" x2="245" y2="150" stroke="#748C5E" strokeWidth="5" strokeLinecap="round" opacity="0.15" />
      {/* Document inside */}
      <rect x="163" y="68" width="34" height="40" rx="3" fill="#748C5E" opacity="0.1" />
      <line x1="169" y1="78" x2="191" y2="78" stroke="#748C5E" strokeWidth="2" opacity="0.15" />
      <line x1="169" y1="86" x2="188" y2="86" stroke="#748C5E" strokeWidth="2" opacity="0.12" />
      <line x1="169" y1="94" x2="185" y2="94" stroke="#748C5E" strokeWidth="2" opacity="0.12" />
      {/* Checkmarks */}
      <path d="M280 60L286 66L296 56" stroke="#748C5E" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
      <path d="M280 85L286 91L296 81" stroke="#748C5E" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
      <path d="M280 110L286 116L296 106" stroke="#748C5E" strokeWidth="3" strokeLinecap="round" opacity="0.15" />
    </svg>
  );
}

export function CertIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#748C5E" opacity="0.06" />
      {/* Certificate */}
      <rect x="130" y="30" width="140" height="100" rx="6" fill="#748C5E" opacity="0.1" />
      <rect x="130" y="30" width="140" height="20" rx="6" fill="#748C5E" opacity="0.08" />
      <line x1="155" y1="65" x2="245" y2="65" stroke="#748C5E" strokeWidth="3" opacity="0.12" />
      <line x1="165" y1="80" x2="235" y2="80" stroke="#748C5E" strokeWidth="2" opacity="0.1" />
      <line x1="170" y1="92" x2="230" y2="92" stroke="#748C5E" strokeWidth="2" opacity="0.1" />
      {/* Seal */}
      <circle cx="200" cy="145" r="20" fill="#748C5E" opacity="0.15" />
      <path d="M192 145L198 151L210 139" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      {/* Star */}
      <path d="M310 50L314 62L326 62L316 70L320 82L310 74L300 82L304 70L294 62L306 62Z" fill="#748C5E" opacity="0.12" />
    </svg>
  );
}

export function MedicalIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#748C5E" opacity="0.06" />
      {/* Medical cross */}
      <rect x="170" y="50" width="60" height="100" rx="4" fill="#748C5E" opacity="0.1" />
      <rect x="150" y="75" width="100" height="45" rx="4" fill="#748C5E" opacity="0.1" />
      {/* Cross symbol inside */}
      <rect x="192" y="80" width="16" height="40" rx="2" fill="#748C5E" opacity="0.15" />
      <rect x="182" y="92" width="36" height="16" rx="2" fill="#748C5E" opacity="0.15" />
      {/* Microscope */}
      <circle cx="310" cy="70" r="15" stroke="#748C5E" strokeWidth="2.5" fill="none" opacity="0.15" />
      <line x1="310" y1="85" x2="310" y2="130" stroke="#748C5E" strokeWidth="3" opacity="0.12" />
      <line x1="295" y1="130" x2="325" y2="130" stroke="#748C5E" strokeWidth="3" strokeLinecap="round" opacity="0.15" />
      {/* Document */}
      <rect x="80" y="60" width="45" height="55" rx="4" fill="#748C5E" opacity="0.08" />
      <line x1="88" y1="72" x2="117" y2="72" stroke="#748C5E" strokeWidth="2" opacity="0.12" />
      <line x1="88" y1="82" x2="112" y2="82" stroke="#748C5E" strokeWidth="2" opacity="0.1" />
      <line x1="88" y1="92" x2="115" y2="92" stroke="#748C5E" strokeWidth="2" opacity="0.1" />
    </svg>
  );
}

export function TrainingIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#748C5E" opacity="0.06" />
      {/* Whiteboard */}
      <rect x="100" y="30" width="200" height="110" rx="6" fill="#748C5E" opacity="0.1" />
      <line x1="120" y1="55" x2="280" y2="55" stroke="#748C5E" strokeWidth="2" opacity="0.12" />
      <line x1="120" y1="72" x2="250" y2="72" stroke="#748C5E" strokeWidth="2" opacity="0.1" />
      <line x1="120" y1="89" x2="260" y2="89" stroke="#748C5E" strokeWidth="2" opacity="0.1" />
      {/* Stand */}
      <line x1="200" y1="140" x2="200" y2="170" stroke="#748C5E" strokeWidth="3" opacity="0.12" />
      <line x1="170" y1="170" x2="230" y2="170" stroke="#748C5E" strokeWidth="3" opacity="0.12" />
      {/* People */}
      <circle cx="140" cy="165" r="10" fill="#748C5E" opacity="0.12" />
      <circle cx="200" cy="165" r="10" fill="#748C5E" opacity="0.15" />
      <circle cx="260" cy="165" r="10" fill="#748C5E" opacity="0.12" />
      {/* Book */}
      <rect x="320" y="70" width="40" height="50" rx="3" fill="#748C5E" opacity="0.1" />
      <line x1="340" y1="70" x2="340" y2="120" stroke="#748C5E" strokeWidth="1.5" opacity="0.15" />
    </svg>
  );
}

export function EsgIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#748C5E" opacity="0.06" />
      {/* Globe */}
      <circle cx="200" cy="95" r="55" stroke="#748C5E" strokeWidth="2.5" fill="none" opacity="0.15" />
      <ellipse cx="200" cy="95" rx="30" ry="55" stroke="#748C5E" strokeWidth="1.5" fill="none" opacity="0.1" />
      <line x1="145" y1="80" x2="255" y2="80" stroke="#748C5E" strokeWidth="1.5" opacity="0.1" />
      <line x1="145" y1="110" x2="255" y2="110" stroke="#748C5E" strokeWidth="1.5" opacity="0.1" />
      {/* Leaf */}
      <path d="M255 55C255 55 275 45 285 55C295 65 280 80 270 75C260 70 255 55 255 55Z" fill="#748C5E" opacity="0.15" />
      {/* Recycle arrows */}
      <path d="M120 70L130 55L140 70" stroke="#748C5E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.15" />
      <path d="M140 120L130 135L120 120" stroke="#748C5E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.15" />
      {/* People icon */}
      <circle cx="310" cy="80" r="10" fill="#748C5E" opacity="0.12" />
      <circle cx="330" cy="85" r="8" fill="#748C5E" opacity="0.1" />
      <rect x="300" y="95" width="20" height="25" rx="5" fill="#748C5E" opacity="0.1" />
      <rect x="322" y="97" width="16" height="22" rx="5" fill="#748C5E" opacity="0.08" />
    </svg>
  );
}

// WhyUs 카드 일러스트
export function ExpertiseIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="180" fill="#748C5E" opacity="0.06" />
      {/* Stacked certificates */}
      <rect x="130" y="30" width="80" height="60" rx="4" fill="#748C5E" opacity="0.08" transform="rotate(-5 130 30)" />
      <rect x="140" y="25" width="80" height="60" rx="4" fill="#748C5E" opacity="0.1" transform="rotate(2 140 25)" />
      <rect x="150" y="20" width="80" height="60" rx="4" fill="#748C5E" opacity="0.14" />
      <path d="M165 48L173 56L185 42" stroke="#748C5E" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      {/* Bar chart */}
      <rect x="260" y="90" width="20" height="50" rx="3" fill="#748C5E" opacity="0.12" />
      <rect x="290" y="60" width="20" height="80" rx="3" fill="#748C5E" opacity="0.15" />
      <rect x="320" y="75" width="20" height="65" rx="3" fill="#748C5E" opacity="0.1" />
    </svg>
  );
}

export function CostIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="180" fill="#748C5E" opacity="0.06" />
      {/* Coin */}
      <circle cx="200" cy="80" r="40" stroke="#748C5E" strokeWidth="3" fill="none" opacity="0.15" />
      <text x="200" y="90" textAnchor="middle" fill="#748C5E" opacity="0.2" fontSize="30" fontWeight="bold">₩</text>
      {/* Down arrow - cost saving */}
      <path d="M290 50L290 110M275 95L290 110L305 95" stroke="#748C5E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.15" />
    </svg>
  );
}

export function CommIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="180" fill="#748C5E" opacity="0.06" />
      {/* Chat bubbles */}
      <rect x="120" y="40" width="100" height="50" rx="12" fill="#748C5E" opacity="0.12" />
      <polygon points="140,90 155,90 135,108" fill="#748C5E" opacity="0.12" />
      <line x1="138" y1="58" x2="200" y2="58" stroke="#748C5E" strokeWidth="2.5" opacity="0.15" />
      <line x1="138" y1="72" x2="185" y2="72" stroke="#748C5E" strokeWidth="2.5" opacity="0.12" />
      <rect x="180" y="80" width="100" height="50" rx="12" fill="#748C5E" opacity="0.1" />
      <polygon points="260,130 245,130 265,148" fill="#748C5E" opacity="0.1" />
      <line x1="198" y1="98" x2="260" y2="98" stroke="#748C5E" strokeWidth="2.5" opacity="0.12" />
      <line x1="198" y1="112" x2="248" y2="112" stroke="#748C5E" strokeWidth="2.5" opacity="0.1" />
    </svg>
  );
}

export function ResultsIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="180" fill="#748C5E" opacity="0.06" />
      {/* Upward trend chart */}
      <polyline points="100,140 150,120 200,100 250,70 300,45" stroke="#748C5E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.2" />
      <circle cx="100" cy="140" r="5" fill="#748C5E" opacity="0.15" />
      <circle cx="150" cy="120" r="5" fill="#748C5E" opacity="0.15" />
      <circle cx="200" cy="100" r="5" fill="#748C5E" opacity="0.18" />
      <circle cx="250" cy="70" r="5" fill="#748C5E" opacity="0.18" />
      <circle cx="300" cy="45" r="6" fill="#748C5E" opacity="0.22" />
      {/* Target */}
      <circle cx="300" cy="45" r="18" stroke="#748C5E" strokeWidth="2" fill="none" opacity="0.1" />
      {/* X/Y axis */}
      <line x1="80" y1="150" x2="320" y2="150" stroke="#748C5E" strokeWidth="2" opacity="0.1" />
      <line x1="80" y1="30" x2="80" y2="150" stroke="#748C5E" strokeWidth="2" opacity="0.1" />
    </svg>
  );
}

// Process 배경용
export function ProcessBgIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      {/* Flow arrows */}
      <path d="M100 300Q300 200 500 300Q700 400 900 300Q1100 200 1200 300" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
      <path d="M0 350Q200 250 400 350Q600 450 800 350Q1000 250 1200 350" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" fill="none" />
      {/* Circles */}
      <circle cx="200" cy="300" r="80" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" fill="none" />
      <circle cx="600" cy="300" r="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
      <circle cx="1000" cy="300" r="90" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// Standards 배경: 추상 네트워크 / 인증 배지 패턴
export function StandardsBgIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Subtle grid */}
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={`sg${i}`} x1={i * 80} y1="0" x2={i * 80} y2="800" stroke="#748C5E" strokeOpacity="0.04" strokeWidth="1" />
      ))}
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={`sh${i}`} x1="0" y1={i * 80} x2="1200" y2={i * 80} stroke="#748C5E" strokeOpacity="0.04" strokeWidth="1" />
      ))}
      {/* Abstract certification badges */}
      <circle cx="150" cy="200" r="60" stroke="#748C5E" strokeOpacity="0.08" strokeWidth="1.5" fill="none" />
      <circle cx="150" cy="200" r="45" stroke="#748C5E" strokeOpacity="0.05" strokeWidth="1" fill="none" />
      <path d="M140 200l6 6 14-14" stroke="#748C5E" strokeOpacity="0.1" strokeWidth="1.5" fill="none" />
      <circle cx="1050" cy="150" r="50" stroke="#748C5E" strokeOpacity="0.06" strokeWidth="1.5" fill="none" />
      <circle cx="1050" cy="150" r="35" stroke="#748C5E" strokeOpacity="0.04" strokeWidth="1" fill="none" />
      <circle cx="600" cy="700" r="70" stroke="#748C5E" strokeOpacity="0.05" strokeWidth="1.5" fill="none" />
      {/* Connecting lines */}
      <path d="M210 200Q400 100 600 200Q800 300 1000 150" stroke="#748C5E" strokeOpacity="0.05" strokeWidth="1" fill="none" />
      <path d="M100 500Q300 400 500 500Q700 600 900 450Q1100 350 1200 400" stroke="#748C5E" strokeOpacity="0.04" strokeWidth="1" fill="none" />
      {/* Dots */}
      <circle cx="400" cy="300" r="3" fill="#748C5E" fillOpacity="0.06" />
      <circle cx="800" cy="250" r="3" fill="#748C5E" fillOpacity="0.06" />
      <circle cx="300" cy="550" r="2.5" fill="#748C5E" fillOpacity="0.05" />
      <circle cx="900" cy="600" r="2.5" fill="#748C5E" fillOpacity="0.05" />
      <circle cx="700" cy="450" r="2" fill="#748C5E" fillOpacity="0.04" />
    </svg>
  );
}

// Contact 배경: 소통/연결 느낌의 추상 패턴
export function ContactBgIllust({ className = '' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Soft wave lines */}
      <path d="M0 200Q300 100 600 200Q900 300 1200 200" stroke="#748C5E" strokeOpacity="0.06" strokeWidth="1.5" fill="none" />
      <path d="M0 400Q300 300 600 400Q900 500 1200 400" stroke="#748C5E" strokeOpacity="0.04" strokeWidth="1" fill="none" />
      <path d="M0 600Q300 500 600 600Q900 700 1200 600" stroke="#748C5E" strokeOpacity="0.05" strokeWidth="1" fill="none" />
      {/* Speech bubble abstract */}
      <rect x="80" y="300" width="120" height="80" rx="16" stroke="#748C5E" strokeOpacity="0.07" strokeWidth="1.5" fill="none" />
      <path d="M120 380L110 400L140 380" stroke="#748C5E" strokeOpacity="0.07" strokeWidth="1.5" fill="none" />
      {/* Envelope abstract */}
      <rect x="1000" y="500" width="100" height="70" rx="8" stroke="#748C5E" strokeOpacity="0.06" strokeWidth="1.5" fill="none" />
      <path d="M1000 508L1050 545L1100 508" stroke="#748C5E" strokeOpacity="0.06" strokeWidth="1.5" fill="none" />
      {/* Phone abstract */}
      <rect x="950" cy="200" width="40" height="70" rx="8" stroke="#748C5E" strokeOpacity="0.05" strokeWidth="1.5" fill="none" />
      {/* Dots network */}
      <circle cx="300" cy="150" r="4" fill="#748C5E" fillOpacity="0.06" />
      <circle cx="500" cy="250" r="3" fill="#748C5E" fillOpacity="0.05" />
      <circle cx="700" cy="350" r="3.5" fill="#748C5E" fillOpacity="0.06" />
      <circle cx="400" cy="550" r="3" fill="#748C5E" fillOpacity="0.04" />
      <circle cx="850" cy="200" r="2.5" fill="#748C5E" fillOpacity="0.05" />
      <line x1="300" y1="150" x2="500" y2="250" stroke="#748C5E" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="500" y1="250" x2="700" y2="350" stroke="#748C5E" strokeOpacity="0.04" strokeWidth="1" />
    </svg>
  );
}
