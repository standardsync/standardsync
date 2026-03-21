import type { ISOStandard } from '../../types/standard';

interface StandardCardProps {
  standard: ISOStandard;
  onClick: (standard: ISOStandard) => void;
}

export function StandardCard({ standard, onClick }: StandardCardProps) {
  return (
    <button
      onClick={() => onClick(standard)}
      className="bg-white rounded-xl border border-gray-200 p-5 text-left hover:border-primary hover:shadow-md transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-semibold text-primary bg-blue-50 px-2.5 py-1 rounded-full">
          {standard.standardNumber}
        </span>
        <span className="text-xs text-gray-400">{standard.totalRequirements}개 항목</span>
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
        {standard.name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
        {standard.description}
      </p>
    </button>
  );
}
