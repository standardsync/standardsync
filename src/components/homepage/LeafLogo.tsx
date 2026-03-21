interface LeafLogoProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export function LeafLogo({ className = 'w-10 h-10', color = 'currentColor', strokeWidth = 1.5 }: LeafLogoProps) {
  return (
    <svg className={className} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left leaf - wider, rounder, tilted left */}
      <path
        d="M32 60C24 50 12 32 16 18C18 10 26 6 32 12C40 20 44 42 38 56C36 59 34 61 32 60Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Left leaf center vein */}
      <path
        d="M24 20C28 32 34 46 35 57"
        stroke={color}
        strokeWidth={strokeWidth * 0.5}
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* Right leaf - wider, rounder, overlapping, tilted right */}
      <path
        d="M46 54C54 42 66 22 60 10C58 4 50 2 45 8C38 18 36 40 42 52C43 53.5 44.5 54.5 46 54Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right leaf center vein */}
      <path
        d="M56 12C52 24 46 40 43 52"
        stroke={color}
        strokeWidth={strokeWidth * 0.5}
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* Short stem where leaves meet */}
      <path
        d="M38 58Q37 66 36 72"
        stroke={color}
        strokeWidth={strokeWidth * 0.7}
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}
