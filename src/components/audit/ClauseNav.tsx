import type { ISOStandard } from '../../types/standard';
import type { AuditSession } from '../../types/audit';
import { calculateSubClauseProgress } from '../../utils/progress';

interface ClauseNavProps {
  standard: ISOStandard;
  session: AuditSession;
  selectedSubClauseId: string | null;
  onSelect: (subClauseId: string) => void;
}

export function ClauseNav({ standard, session, selectedSubClauseId, onSelect }: ClauseNavProps) {
  return (
    <nav className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-3 border-b border-gray-100 bg-gray-50">
        <h3 className="text-sm font-bold text-gray-700">조항 목록</h3>
      </div>
      <div className="overflow-y-auto max-h-[calc(100vh-320px)]">
        {standard.clauses.map((clause) => (
          <div key={clause.id}>
            <div className="px-3 py-2 bg-gray-50 border-b border-gray-100">
              <span className="text-xs font-bold text-gray-600">
                {clause.id}. {clause.title}
              </span>
            </div>
            {clause.subClauses.map((sc) => {
              const scProgress = calculateSubClauseProgress(session, sc);
              const isSelected = selectedSubClauseId === sc.id;
              const isComplete = scProgress.total > 0 && scProgress.audited === scProgress.total;
              const hasNonconformity = scProgress.nonconformity > 0;

              return (
                <button
                  key={sc.id}
                  onClick={() => onSelect(sc.id)}
                  className={`w-full text-left px-3 py-2 text-sm border-b border-gray-50 transition-colors flex items-center justify-between gap-2 ${
                    isSelected
                      ? 'bg-blue-50 text-primary font-medium border-l-3 border-l-primary'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="truncate">
                    <span className="font-medium">{sc.id}</span>{' '}
                    <span className="text-xs">{sc.title}</span>
                  </span>
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap ${
                      isComplete
                        ? hasNonconformity
                          ? 'bg-red-50 text-nonconformity'
                          : 'bg-green-50 text-conformity'
                        : scProgress.audited > 0
                          ? 'bg-blue-50 text-primary'
                          : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {scProgress.audited}/{scProgress.total}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </nav>
  );
}
