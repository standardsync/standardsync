import { useState } from 'react';
import type { ISOStandard } from '../../types/standard';

interface AdminClauseNavProps {
  standard: ISOStandard;
  selectedSubClauseId: string | null;
  onSelect: (subClauseId: string) => void;
  onAddClause: () => void;
  onDeleteClause: (clauseId: string) => void;
  onAddSubClause: (clauseId: string) => void;
  onDeleteSubClause: (clauseId: string, subClauseId: string) => void;
}

export function AdminClauseNav({
  standard,
  selectedSubClauseId,
  onSelect,
  onAddClause,
  onDeleteClause,
  onAddSubClause,
  onDeleteSubClause,
}: AdminClauseNavProps) {
  const [expandedClauses, setExpandedClauses] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    // 선택된 세부조항이 속한 조항을 기본 확장
    if (selectedSubClauseId) {
      for (const clause of standard.clauses) {
        if (clause.subClauses.some((sc) => sc.id === selectedSubClauseId)) {
          initial.add(clause.id);
          break;
        }
      }
    } else if (standard.clauses.length > 0) {
      initial.add(standard.clauses[0].id);
    }
    return initial;
  });

  const toggleClause = (clauseId: string) => {
    setExpandedClauses((prev) => {
      const next = new Set(prev);
      if (next.has(clauseId)) next.delete(clauseId);
      else next.add(clauseId);
      return next;
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-3 border-b border-gray-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">조항 목록</span>
        <button
          onClick={onAddClause}
          className="text-xs font-medium text-primary hover:text-primary-dark transition-colors flex items-center gap-0.5"
          title="조항 추가"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          조항 추가
        </button>
      </div>
      <nav className="max-h-[calc(100vh-14rem)] overflow-y-auto">
        {standard.clauses.map((clause) => {
          const isExpanded = expandedClauses.has(clause.id);
          const reqCount = clause.subClauses.reduce((sum, sc) => sum + sc.requirements.length, 0);
          return (
            <div key={clause.id}>
              {/* 조항 헤더 */}
              <div className="group flex items-center gap-1 px-3 py-2 bg-gray-50 border-b border-gray-100">
                <button
                  onClick={() => toggleClause(clause.id)}
                  className="flex-1 flex items-center gap-2 text-left min-w-0"
                >
                  <svg
                    className={`w-3.5 h-3.5 text-gray-400 shrink-0 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-xs font-bold text-gray-700 truncate">
                    {clause.id}. {clause.title}
                  </span>
                  <span className="text-[10px] text-gray-400 shrink-0">{reqCount}</span>
                </button>
                <div className="hidden group-hover:flex items-center gap-0.5">
                  <button
                    onClick={(e) => { e.stopPropagation(); onAddSubClause(clause.id); }}
                    className="p-0.5 text-gray-400 hover:text-primary transition-colors"
                    title="세부조항 추가"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onDeleteClause(clause.id); }}
                    className="p-0.5 text-gray-400 hover:text-red-500 transition-colors"
                    title="조항 삭제"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 세부조항 목록 */}
              {isExpanded && (
                <div>
                  {clause.subClauses.map((sc) => {
                    const isSelected = sc.id === selectedSubClauseId;
                    return (
                      <div
                        key={sc.id}
                        className={`group/sc flex items-center px-3 py-1.5 cursor-pointer border-l-2 transition-colors ${
                          isSelected
                            ? 'border-l-primary bg-blue-50'
                            : 'border-l-transparent hover:bg-gray-50'
                        }`}
                      >
                        <button
                          onClick={() => onSelect(sc.id)}
                          className="flex-1 text-left min-w-0 pl-5"
                        >
                          <span className={`text-xs ${isSelected ? 'font-semibold text-primary' : 'text-gray-600'}`}>
                            {sc.id}
                          </span>
                          <span className={`text-xs ml-1.5 truncate ${isSelected ? 'text-gray-800' : 'text-gray-500'}`}>
                            {sc.title}
                          </span>
                          <span className="text-[10px] text-gray-400 ml-1">({sc.requirements.length})</span>
                        </button>
                        <button
                          onClick={() => onDeleteSubClause(clause.id, sc.id)}
                          className="hidden group-hover/sc:block p-0.5 text-gray-400 hover:text-red-500 transition-colors shrink-0"
                          title="세부조항 삭제"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                  {clause.subClauses.length === 0 && (
                    <p className="text-xs text-gray-400 px-3 py-2 pl-8">세부조항이 없습니다</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {standard.clauses.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-6">조항이 없습니다</p>
        )}
      </nav>
    </div>
  );
}
